import { hireStructuredData } from "@/lib/seo";

export default function HireStructuredData() {
  return (
    <>
      {hireStructuredData.map((schema, index) => (
        <script
          key={("@id" in schema ? schema["@id"] : undefined) ?? `hire-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
