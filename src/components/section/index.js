import FiftyFiftyContent from "../fiftyFiftyContent";

export default function Section({ fields, sys }) {
  const sectionType = sys?.contentType?.sys?.id;

  if (sectionType === 'fiftyFiftyContent') {
    return <FiftyFiftyContent fields={fields} />;
  }

  return
}