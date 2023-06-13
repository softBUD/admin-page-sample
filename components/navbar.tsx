export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 bg-indigo-200">
      <h2 className="visually-hidden">사이드메뉴</h2>
      <div>
        <button type="button">Dashborad</button>

        <div>
          <ul>
            <li>
              <a href="/">Accordian</a>
            </li>
            <li>
              <a href="/">Cards</a>
            </li>
            <li>
              <a href="/">Carousel</a>
            </li>
            <li>
              <a href="/">alert</a>
            </li>
            <li>
              <a href="/">button</a>
            </li>
            <li>
              <a href="/">Nav</a>
            </li>
            <li>
              <a href="/">질문과답변</a>
            </li>
            <li>
              <a href="/">이벤트</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
