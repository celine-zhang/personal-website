const DownloadResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1FgM3Gtno0h4pjSV3R0zw8ux1blnaePe_/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <button onClick={handleDownload} className="btn mt-3 resumeButton">
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
