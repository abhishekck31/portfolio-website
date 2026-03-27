"use client"

import { useState } from "react"
import DownloadButton from "@/components/ui/button-download"

export default function DownloadButtonDemo() {
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded" | "complete">("idle")
  const [progress, setProgress] = useState(0)

  const simulateDownload = () => {
    setDownloadStatus("downloading")
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setDownloadStatus("downloaded")
          return 100
        }
        return prevProgress + 5
      })
    }, 200)

    setTimeout(() => {
      setDownloadStatus("complete")
    }, 4000 + 1500)

    setTimeout(
      () => {
        setDownloadStatus("idle")
        setProgress(0)
      },
      4000 + 1500 + 100,
    )
  }

  const handleClick = () => {
    if (downloadStatus === "idle") {
      simulateDownload()
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[10rem]">
      <DownloadButton
        downloadStatus={downloadStatus}
        progress={progress}
        onClick={handleClick}
        className="hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  )
}
