

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="text-section">
                <div className="welcome">Hello</div>
                <div className="intro">My Name is Sreehari</div>
                <div className="desc">I am a <span>Frontend Developer</span></div>
            </div>
            <div className="image-section">
                <div className="image-container">
                    <img src="./image.svg" alt="" className="circle" />
                    <img
                        src="./_MG_1139-removebg-preview.png"
                        alt=""
                        className="person_img"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero