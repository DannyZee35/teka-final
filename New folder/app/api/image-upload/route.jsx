import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(req) {
    const data = await req.formData()
    const file = data.get('file')

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const imagePath = join(process.cwd(), 'public/images', file.name)
    await writeFile(imagePath, buffer)

    console.log(`open ${imagePath} to see upload file`)

    return NextResponse.json({ success: true })
}
