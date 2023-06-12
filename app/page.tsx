import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <h1>Hello CSS reset TEST</h1>
      <input type="text" />
      <button>BUTTON</button>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <select name="zzz" id="">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
}
