import { NextResponse } from "next/server";

export async function GET(){
    
    console.log("[GET] Download APK request received");

    const response = await fetch(process.env.NEXT_PUBLIC_DOWNLOAD_APP_URL as string)
    if (!response.ok) {
        return new NextResponse("Failed to fetch the APK file", { status: 500 });
    }

    console.log("[GET] Download APK request completed successfully");

    const blob = await response.blob();
    const contentType = response.headers.get("Content-Type") ?? "application/octet-stream";
    const originalFilename = response.headers.get("Content-Disposition")?.match(/filename="?([^";]+)"?/)?.[1] ?? "kinaru.apk";

    return new NextResponse(blob, {
        status: 200,
        headers: {
            'Content-Type': contentType,
            'Content-Disposition': `attachment; filename=${originalFilename}`,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
        }
    })
}