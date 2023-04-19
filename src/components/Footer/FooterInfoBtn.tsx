function FooterInfoBtn({ btnName }: { btnName: string }) {
  return (
    <li>
      <button className="w-28 h-12 font-semibold">{btnName}</button>
    </li>
  );
}

export default FooterInfoBtn;
