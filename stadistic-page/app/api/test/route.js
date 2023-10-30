import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path, { parse } from "path";
import { readFileSync } from "fs";
import { connectDB } from "../../utils/mongo";
import Task from "../../models/task";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.formData();

    const file = data.get("file");

    //const bytes = await file.arrayBuffer();
    //const buffer = Buffer.from(bytes);

    //const filePath = path.join(process.cwd(), "public", file.name);
    //await writeFile(filePath, buffer);
    const filePath = path.join(process.cwd(), "public", "dates.json");
    const fileContent = readFileSync(filePath);

    const newTask = await new Task({
      next: "hola",
      resulst: [JSON.parse(fileContent.toString())],
    });

    const saveTask = await newTask.save();

    console.log(newTask);

    return new Response(
      JSON.stringify({
        response: "Yes",
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

export async function GET() {
  await connectDB();

  const tasks = await task.find();

  return NextResponse.json(tasks);
}
