const DownloadResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1flVNp53d33QpwQOIxzLpnCpsty1ynXcd/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <button onClick={handleDownload} className="btn btn-secondary mt-3">
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
