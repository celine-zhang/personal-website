const DownloadResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1xF3fjOLPZF-ZANtvDBefJNurF67jg71u/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <button onClick={handleDownload} className="btn mt-3 resumeButton">
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
