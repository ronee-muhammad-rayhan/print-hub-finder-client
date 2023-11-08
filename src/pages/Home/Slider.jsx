import { Carousel } from "flowbite-react";

const Slider = () => {
    return (
        <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE4owsslfSodEJLXRKyz0MeI6L0nxxspndRiICuOpQVq79m9_OWzvpMVO4YJTa0Owog&usqp=CAU" alt="..." />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ2kPXLQy8OVQ6OEDF9BkjyPTBfYG9upfWTQr-SO_EbJXqE92RVBHRVvP5IhewELaAg&usqp=CAU" alt="..." />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGO42H4R46HMiFyTVtO50qbxN8K9Ap_q_jF9Zi_cfDzu6nzi7FjoM_HEpASXBrlFctZK4&usqp=CAU" alt="..." />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_s2de5nC1-qrkERdku97sIRDTl-luckzroAHJLGzXu4b2Nlgq2f80TiWYY9rfW_8cbtA&usqp=CAU" alt="..." />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDgf1s79odXpQ-QmWxNaIcqSOyeKZtXPO3qKQfdpC_SXsFff7XNu7zuZ8c_TnvoNl2ug&usqp=CAU" alt="..." />
            </Carousel>
        </div>
    );
};

export default Slider;