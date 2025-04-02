import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Set FFmpeg path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");

async function optimizeVideos() {
  const videoDir = path.join(projectRoot, "public/assets/videos");

  try {
    // Create directory if it doesn't exist
    await fs.mkdir(videoDir, { recursive: true });
    console.log(`✓ Ensuring video directory exists: ${videoDir}`);

    const files = await fs.readdir(videoDir);

    if (files.length === 0) {
      console.log("⚠ No videos found in directory");
      return;
    }

    for (const file of files) {
      if (file.match(/\.(mp4|MP4)$/i)) {
        const inputPath = path.join(videoDir, file);
        const outputPath = path.join(
          videoDir,
          `${path.parse(file).name}_optimized.mp4`
        );

        // Skip if optimized file already exists
        if (
          await fs
            .access(outputPath)
            .then(() => true)
            .catch(() => false)
        ) {
          console.log(`⚠ Skipping ${file} - optimized version already exists`);
          continue;
        }

        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .outputOptions([
              "-c:v libx264", // Video codec
              "-crf 23", // Quality (18-28, lower = better)
              "-preset slow", // Encoding preset
              "-c:a aac", // Audio codec
              "-b:a 128k", // Audio bitrate
              "-movflags +faststart",
            ])
            .output(outputPath)
            .on("start", () => console.log(`🎥 Started processing: ${file}`))
            .on("progress", (progress) => {
              // Safe progress reporting
              const percent = progress.frames
                ? ((progress.frames * 100) / progress.totalFrames).toFixed(2)
                : "calculating...";
              process.stdout.write(`\r📈 Processing: ${file} - ${percent}%`);
            })
            .on("end", () => {
              console.log(`\n✅ Finished optimizing: ${file}`);
              resolve();
            })
            .on("error", (err) => {
              console.error(`\n❌ Error processing ${file}:`, err.message);
              reject(err);
            })
            .run();
        });
      }
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

console.log("🚀 Starting video optimization...");
optimizeVideos()
  .then(() => console.log("✨ Video optimization complete!"))
  .catch((error) => console.error("❌ Fatal error:", error.message));
