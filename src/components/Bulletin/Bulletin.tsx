// function Bulletin() {
//   return <div>aaaa</div>;
// }
// export default Bulletin;

import React, { useState } from 'react';

function Bulletin() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitData = {
      title: title,
      content: content,
      files: files,
    };
    console.log('submitdata = ', submitData);

    // 필드 초기화
    setTitle('');
    setContent('');
    setFiles([]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...uploadedFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">제목</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block mb-2">내용</label>
        <textarea
          className="w-full h-48 p-2 mb-4 border border-gray-300 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>

        <label className="block mb-2">파일 업로드</label>
        <input
          type="file"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          multiple
          onChange={handleFileChange}
        />

        {/* 업로드한 파일 목록 */}
        <div className="mb-4">
          {files.map((file, index) => (
            <div key={index} className="flex items-center mb-2">
              <span>{file.name}</span>
              <button type="button" className="ml-2 text-red-600 hover:text-red-800" onClick={() => removeFile(index)}>
                x
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="px-6 py-2 mb-12 font-semibold text-white bg-blue-800 rounded">
          작성하기
        </button>
      </form>
    </div>
  );
}

export default Bulletin;
