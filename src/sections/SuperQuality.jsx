import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="grid grid-col-2">
      <h2 className=" font-palanquin text-4xl capatalize font-bold lg:max-w-lg ">
        We Provide You  
        <span className="text-coral-red"> Super</span>
        <br />
        <span className="text-coral-red">Quality</span>
        Shoes
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style,  our meticouously crafted shoes are designed to elevate your performance and enhance your everyday experience.
      </p>
      <p className="mt-6 lg:max-w-lg info-text">our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label= "view details" iconURL={arrowRight}  />
      <Button label="Learn More" 
        backgroundColor="bg-white"
        border-color="border-slate-gray" 
        text-color="text-slate-gray"  
        />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
          </section>
  )
}

export default SuperQuality
