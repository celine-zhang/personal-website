const DownloadResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl = "../assets/Xinlin_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary">
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
