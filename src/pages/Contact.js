import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

export default function Contact() {
  return (
    <div className="bg-hero bg-cover bg-no-repeat">
      <ContactForm />
      <ContactMap />
    </div>
  );
}
