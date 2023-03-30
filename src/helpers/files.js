export const handleDownload = (fileLink) => {
  var link = document.createElement("a");
  link.setAttribute('download', "file");
  link.href = fileLink;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
}