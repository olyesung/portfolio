import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Column } from "./style";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #334b48;
  color: white;
`;

const Contact_Me = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin: 7vh;
`;

const Grid_Template = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 50vw;
  height: 5vh;
  margin-bottom: 3vh;
`;

const Input = styled.input`
  padding: 0 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #00231f;
  background-color: #e3e0f3;

  color: #324b4c;
  ::placeholder {
    color: #324b4c;
    opacity: 0.7;
  }
  :focus {
    outline: 3px solid #68b886;
    border: 1px solid #2e7e66;
  }
`;

const Textarea = styled(Input)`
  padding: 10px 15px;
  resize: vertical;
  width: 50vw;
  display: block;
  height: 50vh;
`;

const Button = styled.input`
  font-size: 16px;
  font-weight: 600;
  background-color: #418367;
  color: white;
  margin: 5vh 0;
  width: 9vw;
  height: 5vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #2e7e66;
  }
`;

function Contact() {
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        form.current as HTMLFormElement,
        `${USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            alert("메일을 성공적으로 보냈습니다.");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Column>
        <Contact_Me>Contact</Contact_Me>
      </Column>
      <Column>
        <form ref={form} onSubmit={sendEmail}>
          <Grid_Template>
            <Input
              placeholder="Name"
              minLength={2}
              required
              type="text"
              name="to_name"
            ></Input>
            <Input
              placeholder="Email"
              minLength={2}
              required
              type="email"
              name="from_name"
            ></Input>
          </Grid_Template>
          <Textarea
            as={"textarea"}
            placeholder="Enter your message"
            required
            name="message"
          ></Textarea>
          <Button type="submit" value="Send Now" />
        </form>
      </Column>
    </Container>
  );
}

export default Contact;
