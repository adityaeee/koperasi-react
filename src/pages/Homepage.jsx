import React from "react";
import CardHomePage from "../components/CardHomePage";
import AboutUs from "../components/AboutUs";
import Count from "./Count";

export default function Homepage() {
    return (
        <>
            <section className="container">
                <div className="content__container">
                    <h1>
                        Enigma Koperasi
                        <br />
                        <span className="heading__1">
                            Layanan Finansial Pilihan
                        </span>
                        <br />
                        <span className="heading__2">Utama Kita Semua</span>
                    </h1>
                    <p>
                        Koperasi Enigma adalah sebuah koperasi yang berdedikasi
                        tinggi pada pemberdayaan ekonomi masyarakat. Didirikan
                        pada tahun 2010, kami telah berkomitmen untuk memberikan
                        solusi finansial yang inovatif dan terpercaya kepada
                        anggota kami.
                    </p>

                    <form action="">
                        <input
                            type="text"
                            placeholder="Drop your email for updates"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="image__container">
                    <img src="/src/assets/images/gambar1.jpeg" alt="" />
                    <img src="/src/assets/images/gambar2.jpeg" alt="" />
                    <div className="image__content">
                        <ul>
                            <li>
                                Get Promos for groceries
                                <br />
                                For new registries
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="justify-content-center d-flex mt-5">
                <h2 className="section__title">Our Services</h2>
            </div>

            <div className="page__content mb-5">
                <CardHomePage
                    title="Simpan"
                    desc="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
                    buttonText="Daftar"
                />
                <CardHomePage
                    title="Simpan"
                    desc="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
                    buttonText="Daftar"
                />
                <CardHomePage
                    title="Simpan"
                    desc="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
                    buttonText="Daftar"
                />
                <CardHomePage
                    title="Simpan"
                    desc="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
                    buttonText="Daftar"
                />
            </div>

            <div className="justify-content-center d-flex mt-5">
                <h2 className="section__title">About Us</h2>
            </div>

            <div className="page__content mb-5 d-flex justify-content-around">
                <AboutUs
                    title="Koperasi Nusantara"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aperiam ratione aspernatur magnam tempore iure voluptas qui veniam unde dicta. Deleniti nostrum veritatis natus dolor."
                />
                <AboutUs
                    title="Layanan Finansial"
                    desc="Itaque aperiam ratione . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aperiam ratione aspernatur magnam tempore iure voluptas qui veniam unde dicta. Deleniti nostrum veritatis natus dolor."
                />
            </div>
            <Count />
        </>
    );
}
