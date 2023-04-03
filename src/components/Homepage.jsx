import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./HomePage.css";
const Homepage = () => {
    return (
        <div id='main'>
            <div id='nav'>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#image">Home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#aboutme">About me</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#contact"><a href={require("../components/Sanjay Resume Updated.pdf")} download={'Sanjay Resume.pdf'}>Resume</a></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div id='name'>
                <p> Hello!</p>
                <p> This is Sanjay </p>
            </div>
            <div id='image'>
                <img id='hack' src="https://image.cnbcfm.com/api/v1/image/107039462-1648704363320-gettyimages-1238849539-porzycki-anonymou220301_npOnF.jpeg?v=1648712230" alt="hacker" width={"600px"} height={"100%"} />
            </div>
            <div id='aboutme'>
                <h1>About Me</h1>
                <p>I am a highly motivated and passionate individual, dedicated to continuously improving my skills and pursuing my goals with determination and resilience. I am a skilled Full Stack Developer with expertise in MERN (MongoDB, Express.js, React, and Node.js) technologies, capable of designing and implementing complex web applications from the ground up. Additionally, I have undergone rigorous training in a Full Stack Development Bootcamp, where I gained hands-on experience in MERN stack development through the completion of multiple projects, including web applications with complex functionalities and user interfaces. Ability to collaborate effectively with teams and improving my problem-solving skills.</p>
            </div>
            <div id='skills'>
                <h1 id='h1'>Skills</h1>
                <div id='skillimg'>
                    <img src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" width={"100px"} height={"100%"} alt="" />
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" width={"100px"} height={"100%"} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" width={"100px"} height={"100%"} />
                    <img src="data:image/png;base64,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" width={"100px"} height={"100px"} alt="" />
                    <img src="https://philna.sh/assets/posts/node-1305aa9ecfe75c279ce6772534e04dd5999ddd372dcf28ef41c2a9a84b5acdb1.png" width={"100px"} height={"100px"} alt="" />
                    <img src="data:image/png;base64,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" alt="" width={"100px"} height={"100px"} />
                    <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" width={"100px"} height={"100%"} />
                    <img src="data:image/jpeg;base64,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" alt="" width={"100px"} height={"100%"} />
                    <img src="https://live.staticflickr.com/65535/40666021673_fb324524ec_b.jpg" alt="" width={"120px"} height={"100%"} />
                </div>
            </div>
            <h1 id='h1'>Projects</h1>


            <div id='project'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Contact Manager</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Group Project</Card.Subtitle>
                            <Card.Text>
                                This app is built with a secure dashboard where users can sign up/in, manage personal contacts, delete and export them. Ensure privacy by restricting access and using encryption.
                            </Card.Text>
                            <Card.Link href="https://contactmanager-98.onrender.com/">Live Link</Card.Link>
                            <Card.Link href="https://github.com/Sanjaym-98/Contact-Manager-Backend">Github Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>InstaClone</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Individual Project</Card.Subtitle>
                            <Card.Text>
                                This is a social media app that allows users to upload the post that is made by them and also they can able to view the uploaded posts.
                            </Card.Text>
                            <Card.Link href="https://msanjayinstaclone98.onrender.com/">Live Link</Card.Link>
                            <Card.Link href="https://github.com/Sanjaym-98/instagram-backend">Github Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Playable Piano</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Personal Project</Card.Subtitle>
                            <Card.Text>
                                Developed a Piano application with features such as dynamic volume control, the ability to show/hide
                                keyboard keys, and note display for the birthday tune.
                            </Card.Text>
                            <Card.Link href="https://sanjay-piano.onrender.com/">Live Link</Card.Link>
                            <Card.Link href="https://github.com/Sanjaym-98/Piano-Project">Github Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Book List App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Personal Project</Card.Subtitle>
                            <Card.Text>
                                Developed this application that enables users to create an account, login, and upload new books along with their title, ISBN, and publisher details. The application also allows users to edit or delete books they have uploaded.
                            </Card.Text>
                            <Card.Link href="https://booklist-app.onrender.com/">Live Link</Card.Link>
                            <Card.Link href="https://github.com/Sanjaym-98/Book-List-Backend">Github Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h1 id='h1'>Education</h1>
            <div id='education'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-60"
                            src="https://media.licdn.com/dms/image/C4D0BAQHPgplXD7VrXw/company-logo_200_200/0/1660583656016?e=1684368000&v=beta&t=XTEb7griy6JILBooZjXuhrFUNeyc7yESRZbESNWJQMQ"
                            alt="10x academy"
                        />
                        <Carousel.Caption>
                            <h3>10x Academy</h3>
                            <p>The 10x Academy is an intensive online program, meticulously crafted by top-notch industry professionals, that offers a comprehensive curriculum on MERN technologies. The program emphasizes daily coding assignments and one-on-one mentorship sessions to provide students with an immersive learning experience, aimed at developing their expertise in the field.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-60"
                            src="https://2.bp.blogspot.com/-ReFlxlsf_iU/T4G_Cj-NVBI/AAAAAAAAAU8/JjN0pa4E3ts/w1200-h630-p-k-no-nu/vtu.jpg"
                            alt=" Bachelor of Engineering"
                        />
                        <Carousel.Caption>
                            <h3>City Engineering College</h3>
                            <p>Completed a Bachelor of Engineering in Civil Engineering from City Engineering College from the year 2016 to 2020.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-60"
                            src="https://media.licdn.com/dms/image/C4E0BAQHfAKTOa1P5uA/company-logo_200_200/0/1599557374637?e=2147483647&v=beta&t=2qJTI0VEvQ3tCyvTJDYjErmNTR8jhJNzpYyNhbIC7nc"
                            alt="PUC"
                        />
                        <Carousel.Caption>
                            <h3>The National College</h3>
                            <p>
                                Completed the Pre-University Course(PCMB) from The National College Jayanagar in the year 2014-2016.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id='contact'> 
    <h1>Let's Connect!</h1>
    <div id='contacticons'>
        <div>
            <img src="https://static.vecteezy.com/system/resources/previews/003/720/446/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg" width={"100px"} alt="" />
            <h2>Phone Number : 8892548947</h2>
        </div>
        <div id='gmail'>
            <img src="https://wallpapercave.com/wp/wp8086802.jpg" alt="" width={"100px"} />
            <h2>Gmail : sanjaym1998@gmail.com</h2>
        </div>
    </div>
    <div id='contacticons'>
        <div id='linked'>
            <img src="https://thedrum-media.imgix.net/thedrum-user-assets-prod/s3/images/original/LI.jpeg?w=1920&ar=default&fit=crop&crop=faces,edges&auto=format" alt="" width={"62px"} />
            <h2><a href="https://www.linkedin.com/in/sanjay-m-922629241/">LinkedIn</a></h2>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKXdRAbLeWeuSsB1LLS2Sd93vlipIaKcj29pW7YQ93ezt1jhCbQH1J64nujx8JLse6H3r7fPGaMQ&usqp=CAU&ec=48665698" alt="" width={"68px"} />
            <h2><a href="https://github.com/Sanjaym-98">GitHub</a></h2>
        </div>
    </div>
</div>

</div>
    );
}
export default Homepage