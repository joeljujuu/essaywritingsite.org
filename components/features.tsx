import Container from "./container";
import Image from 'next/image'

export default function Features(){
    return <>
    <section className="mb-16">
        <Container>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_plagiarism-free.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Persuasive essay</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">A persuasive essay is exactly what it sounds like. It seeks to convince or persuade the reader of a specific point of view. It's similar to an argumentative essay in that both firmly support a particular point of view, but their difference lies in the objective. Although argumentative essays only need to make their case, persuasive essays also need to persuade the reader.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_superwriters.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Argumentative essay</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">Similar to a persuasive essay, an argumentative essay employs a more combative style. The author provides different opinions on a subject and argues favouring that position. Argumentative essays are commonly used in academic writing, including research papers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_freerevisions.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Narrative essay</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">A narrative essay tells a story in the first person. The author may add sensory components and conversation to make the story more interesting. A narrative essay aims to entertain, impart an idea, or reflect on a personal experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
}