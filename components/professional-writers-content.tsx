import Container from "./container";
import Image from 'next/image'

export default function ProfessionalWritersContent(){

    return (
        <>
            <section className="py-16 bg-gray-100">
                <Container>
                    <div>
                        <h3 className="text-xl font-medium">Essays types</h3>
                        <div className="my-3">
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">Do you have a strong opinion and desire to share? Compose an essay! Want to persuade others to agree with your contrary opinion? Write an essay! Do you have to write something because the college you want to attend is forcing you to? Write an essay! Essay writing is a necessary skill every student must have to thrive academically. Whether in high school or university, you will be asked to write essays on various topics throughout your academic career. Writing an essay might be difficult, but with the proper techniques and strategies, you can produce a fantastic paper that will surprise your professor and get you excellent grades. In this blog, we'll walk you through the essential components of essay writing and offer some pointers and tricks to help you improve. Similar to other forms of writing, essays can be written in a broad range of styles. The assignment may occasionally decide the type. Understanding the differences between the many types of essays is essential for good writing because each has a unique objective structure and style. However, it's vital to be aware of your options. So, the following are some of the most common types:</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-16">
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_superwriters.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Descriptive essay</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">A descriptive essay describes a person, location, item, or event through sensory explanations. The author uses vivid language to evoke a strong mental picture in the reader. Descriptive essays are frequently taught in creative writing classes and can be used to elicit emotion or illustrate a certain moment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_writer.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Cause and Effect essay</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">A cause-and-effect essay investigates the link between two or more events or phenomena. The author outlines the causes and effects and offers evidence to support their claim. Cause and effect essays are frequently assigned in science, history, and social science classes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_writer-award.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Expository essay</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">An expository essay fairly analyzes a subject, concept, or problem. The author aims to educate the reader on the topic and offer proof to support their claim. Expository essays are frequently utilized in academic writing and found in books and research papers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )

}