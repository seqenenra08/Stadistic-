import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public", file.name);
    await writeFile(filePath, buffer);

    const fileContent = readFileSync(filePath); 

    return new Response(
      JSON.stringify({
        response: JSON.parse(fileContent.toString()),
      })
    );
  } catch (error) {
    return NextResponse.json(
      JSON.stringify(
        {
          message: "no file",
        },
        {
          status: 400,
        }
      )
    );
  }
}