import Accordion from "@/components/accordion";

export default function FaqSection() {
    return (
      <>
        <div id="faq" className="h-[982px] overflow-hidden">
            <h1 className="px-24 py-10 font-black text-6xl text-[#EEE9D7] tracking-widest">
                FAQ
            </h1>
            <div className="grid gap-4 ml-24 grid-cols-2 items-start">
                <Accordion title="What is a hackathon?" content="A hackathon is an event where creative minds come together to create amazing projects in a short time frame! We are tech oriented, and HackDartmouth is focused primarily on software and hardware hacks. Come with an idea, or just to have a fun time!"/>
                <Accordion title="What is the deadline to register?" content="The application deadline for Dartmouth students is April 15th, and the deadline for anyone not a Dartmouth student is March 8th"/>
                <Accordion title="Who can attend?" content="Any college/graduate student! No experience necessary--you'll have the chance to pick up new skills from our workshops during the hackathon!"/>
                <Accordion title="What kind of workshops/activities will there be?" content="We host a variety of workshops and activities each year. We're still finalizing the list for HackDartmouth VII, but it'll include how to get started in web dev, how to deploy your product, some design basics, and more!"/>
                <Accordion title="Do I need experience?" content="Depends on what you're looking to make! A little background in programming will be helpful, but you'll have plenty of opportunity to join teams and learn from Dartmouth students, students from other schools, and mentors. We’ll also have workshops if you are interested in learning a particular skill. There is plenty of time to learn something new!"/>
                <Accordion title="How can I be a part of HackDartmouth?" content="We're always looking for new members excited about putting together hackathons! Generally, we send out a recruiting email in the Fall, but feel free to reach out to us at team@hackdartmouth.org if you're interested in joining in the off-season"/>
                <Accordion title="What if I don't have a team or an idea?" content="No worries! While teams can be specified on the application, you won't officially create your team until the event. We hold a team formation social before the hacking begins."/>
                <Accordion title="What if I have other questions?" content="Shoot us an email at team@hackdartmouth.org and we’ll get back to you as soon as we can!"/>
                <Accordion title="What can I build?" content="A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech."/>
                <Accordion title="MLH code of conduct" content="The MLH Code of Conduct can be found on their website"/>
                <Accordion title="What can I win?" content="A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech."/>
            </div>
        </div>
      </>
    )
  }