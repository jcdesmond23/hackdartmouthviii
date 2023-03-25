import Link from "next/link";
import styles from "../styles/home.module.css";

export default function HomeSection() {
    return (
      <>
        <div style={{minHeight: 972}}>
            <div>
                <div>
                    <h3 className={styles.h3}>
                        {"HACKDARTMOUTH 2023 PRESENTS"}
                    </h3>
                    <h1 className={styles.h1}>
                        {"INTO THE MULTIVERSE"}
                    </h1>
                </div>
                <div className={styles.tabscontainer}>
                    <Link href="#about">
                        <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"ABOUT"}
                        </button>
                    </Link>
                    <Link href="#tracks">
                        <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"TRACKS"}
                        </button>
                    </Link>
                    <Link href="#faq">
                        <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                        {"FAQ"}
                        </button>
                    </Link>
                    <Link href="#sponsors">
                        <button className="text-[#D9D9D9] text-2xl font-bold tracking-widest rounded-2xl border-[3px] border-[#D9D9D9] w-52 py-2 hover:text-black hover:bg-[#D9D9D9] hover:border-black">
                            {"SPONSORS"}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </>
    )
  }