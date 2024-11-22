const fetchArtifactContent = async () => {
  const organization = "ImagoWorks";
  const feedId = "ImagoWorks";
  const packageName = "upm_publish_test";
  const packageVersion = "0.0.0";
  const apiVersion = "7.1-preview.1";
  const pat =
    "jsbaDx7fuZsFq30py6jT3CnyaNbOpXFS6vFTOAi4PtCH89ca6qbGJQQJ99AKACAAAAAL9ZaJAAASAZDOKljS"; // Replace with your PAT

  const listAPIUrl = `https://pkgs.dev.azure.com/${organization}/_apis/packaging/feeds/${feedId}/upack/packages/${packageName}/versions/${packageVersion}?api-version=${apiVersion}`;

  try {
    // Fetch package version details
    const response = await fetch(listAPIUrl, {
      headers: {
        Authorization: `Basic ${btoa(`:${pat}`)}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const artifactData = await response.json();
    console.log("Artifact Data:", artifactData);

    // Extract the content download URL
    const downloadUrl = artifactData._links.content.href;
    console.log("Download URL:", downloadUrl);

    // Fetch the package content
    const contentResponse = await fetch(downloadUrl, {
      headers: {
        Authorization: `Basic ${btoa(`:${pat}`)}`,
      },
    });

    if (!contentResponse.ok) {
      throw new Error(
        `Error: ${contentResponse.status} ${contentResponse.statusText}`
      );
    }

    // Read the response as a Blob
    const blob = await contentResponse.blob();

    // Create a link to download the blob
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${packageName}-${packageVersion}.upack`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);

    console.log("Package downloaded successfully.");
  } catch (error) {
    console.error("Error fetching artifact content:", error);
  }
};

fetchArtifactContent();
