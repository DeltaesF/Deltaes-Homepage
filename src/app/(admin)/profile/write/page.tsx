export default function Write() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <label htmlFor="image">이미지 업로드</label>
        </div>
        <button type="submit">글 작성</button>
      </form>
    </div>
  );
}
