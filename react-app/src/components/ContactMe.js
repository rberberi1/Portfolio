function ContactMe(){
  return(
    <section id="contact" class="contact">
    <h2>Contact Me</h2>
    <form id="contactForm" class="contactForm">
      <label for="name">Name</label>
      <input type="text" name="name" required/>

      <label for="email">Email</label>
      <input type="text" name="email" required/>

      <label for="subject">Subject</label>
      <input type="text" name="subject" required/>

      <label for="message">Message</label>
      <textarea type="text" name="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>

  </section>
  );
}

export default ContactMe;