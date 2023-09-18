const ContactMeButton = () => {
  const handleContact = () => {
    const contacturl = "https://www.linkedin.com/in/xz715/";
    window.open(contacturl, "_blank");
  };

  return (
    <button onClick={handleContact} className="btn mt-3 contactButton">
      Contact Me
    </button>
  );
};

export default ContactMeButton;
