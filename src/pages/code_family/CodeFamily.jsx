import SectionOne from "../../widgets/code-family/SectionOne";
import SectionTwo from "../../widgets/code-family/SectionTwo";
import './code_family.scss';

export default function CodeFamily() {
  return (
    <main className="code-family__parent">
      <SectionOne/>
      <SectionTwo/>
    </main>
  )
}
