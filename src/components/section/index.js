import FiftyFiftyContent from "../fiftyFiftyContent";
import RichText from "../richText";

export default function Section({ fields, sys }) {
  const sectionType = sys?.contentType?.sys?.id;
  if (sectionType === 'fiftyFiftyContent') {
    return <FiftyFiftyContent fields={fields} />;
  } else if (sectionType === "privacyContent") {
    return <RichText text={fields?.body} />
  }

  return
}