function FooterInfoBtn({ btnName }: { btnName: string }) {
  return (
    <li>
      <button className="h-12 font-semibold w-28">{btnName}</button>
    </li>
  );
}

export default FooterInfoBtn;
