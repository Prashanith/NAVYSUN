const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
      entries.forEach((entry) => {
    
        if(entry.isIntersecting) {
          entry.target.classList.add('enter');
          animatedScrollObserver.unobserve(entry.target);
          
            const counters = document.querySelectorAll('.counter');
            const speed = 700; // The lower the slower
      
            counters.forEach(counter => {
              const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                if (count < target) {
                  counter.innerText = Math.ceil( count + inc);
                  setTimeout(updateCount, 1);
                } else {
                  counter.innerText = target;
                }
              };
      
              updateCount();
            });
          
        }
      });
    }
  );
  
  
  export default {
    bind(el) {
      el.classList.add('before-enter');
      animatedScrollObserver.observe(el);
    }
  }