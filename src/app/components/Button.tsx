import Link from "next/link";
import { Button as ButtonProps } from '../useData';

export default function Button(props: ButtonProps) {
  const {href, text } = props;
  return <Link href={href} className="bg-indigo-500 py-4 px-10 rounded text-base text-white hover:bg-indigo-700 font-extralight">{text}</Link>    
}