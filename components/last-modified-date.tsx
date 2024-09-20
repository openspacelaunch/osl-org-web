import { useEffect, useState } from "react";

type LastModifiedDateProps = {
  filePath: string;
};

const LastModifiedDate = ({ filePath }: LastModifiedDateProps) => {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    const fetchLastModifiedDate = async () => {
      const response = await fetch(`/api/last-modified-date?file=${filePath}`);
      const data = await response.json();
      setLastModified(data.lastModified);
    };

    fetchLastModifiedDate();
  }, [filePath]);

  return (
    <p className="mt-8 text-sm text-gray-500">Last Updated: {lastModified}</p>
  );
};

export default LastModifiedDate;
