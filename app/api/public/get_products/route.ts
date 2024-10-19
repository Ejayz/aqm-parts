import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

type FileMetadata = {
  eTag: string;
  size: number;
  mimetype: string;
  cacheControl: string;
  lastModified: string;
  contentLength: number;
  httpStatusCode: number;
};

type FileObject = {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: FileMetadata;
};


export async function GET(req: NextRequest) {
  const supabase = createClient();

  const { data, error } = await supabase
  .storage
  .from("product_image")
  .list("", {
    limit: 100, // Adjust the limit based on your needs
    offset: 0,  // Adjust offset for pagination if needed
  })

  console.log(data);
  return NextResponse.json(data);
}

