import { allStructuredData } from "@/lib/seo";

export default function StructuredData() {
  return (
    <>
      {allStructuredData.map((schema, index) => (
        <script
          key={("@id" in schema ? schema["@id"] : undefined) ?? `schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
