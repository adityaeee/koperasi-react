import React from "react";

export default function Homepage() {
    return (
        <div>
            <section className="container mt-5 pt-5">
                <div className="content__container">
                    <h1>
                        Enigma Nusantara
                        <br />
                        <span className="heading__1">
                            Layanan Finansial Pilihan
                        </span>
                        <br />
                        <span className="heading__2">Utama Kita Semua</span>
                    </h1>
                    <p>
                        Koperasi Nusantara adalah sebuah koperasi yang
                        berdedikasi tinggi pada pemberdayaan ekonomi masyarakat.
                        Didirikan pada tahun 2010, kami telah berkomitmen untuk
                        memberikan solusi finansial yang inovatif dan terpercaya
                        kepada anggota kami.
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
        </div>
    );
}
