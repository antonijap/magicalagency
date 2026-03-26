import { notFound } from "next/navigation";
import { getBrief } from "@/lib/redis";
import PreviewClient from "./PreviewClient";

interface PageProps {
  params: { id: string };
}

export default async function PreviewPage({ params }: PageProps) {
  const data = await getBrief(params.id);

  if (!data) {
    notFound();
  }

  return <PreviewClient formData={data.formData} brief={data.brief} />;
}
