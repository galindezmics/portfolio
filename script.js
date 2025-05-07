// 1. Navigation Bar with underlined - part of next pages
document.querySelectorAll('.hover-effect').forEach(item => {
  item.addEventListener('click', function() {

    document.querySelectorAll('.hover-effect').forEach(el => {
      el.classList.remove('active');
      el.style.color = ''; 
    });

    this.classList.add('active');
    this.style.color = '#3b82f6'; 
  });
});



// 2. Open and Close to Menu using mobile phone
function openMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.remove('-right-64');
  sideMenu.classList.add('right-0');
}
function closeMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.remove('right-0');
  sideMenu.classList.add('-right-64');
}
function setActive(element) {
  const menuItems = document.querySelectorAll('.hover-effect');
  menuItems.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
}


// 3. Hand waving animated
document.addEventListener("DOMContentLoaded", function() {
  const wavingHand = document.getElementById("waving-hand");
  let angle = 0;
  let increasing = true;

  function waveHand() {
    if (increasing) {
      angle += 5;
      if (angle >= 30) {
        increasing = false;
      }
    } else {
      angle -= 5;
      if (angle <= -10) {
        increasing = true;
      }
    } 
    wavingHand.style.transform = `rotate(${angle}deg)`;
    setTimeout(waveHand, 100);
  }
  waveHand();
});


// 4. Programming Language Logo Animated
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon, index) => {
    icon.style.animation = `bounce 1s ease-in-out ${index * 0.1}s infinite`;
  });
});


// 5. Next Pages
function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

function openMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.remove('-right-64');
  sideMenu.classList.add('right-0');
}

function closeMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.remove('right-0');
  sideMenu.classList.add('-right-64');
}
showSection('home');


// 6. Typing Text with Hand Icon
const text = "Welcome to my Portfolio!";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = ""; 
      index = 0; 
      type(); 
    }, 5000); 
  }
}
window.onload = function() {
  type();
};


// 7. Effect of text changing
const jobTitles = [
  'Software Engineer',
  'Web Developer', 
  'C#.NET Developer'
];
const titleElement = document.getElementById('job-title');
let currentTitleIndex = 0;
let currentTitle = '';
let isDeleting = false;
let typingSpeed = 100;
let deleteSpeed = 50;

function typeTitle() {
  const fullTitle = jobTitles[currentTitleIndex];
  if (!isDeleting) {
      if (currentTitle.length < fullTitle.length) {
          currentTitle = fullTitle.substring(0, currentTitle.length + 1);
          titleElement.textContent = currentTitle;
          setTimeout(typeTitle, typingSpeed);
      } else {
          setTimeout(() => {
              isDeleting = true;
              typeTitle();
          }, 2000);
      }
  } else {
      if (currentTitle.length > 0) {
          currentTitle = currentTitle.substring(0, currentTitle.length - 1);
          titleElement.textContent = currentTitle;
          setTimeout(typeTitle, deleteSpeed);
      } else {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
          setTimeout(typeTitle, 500); // Brief pause before starting next title
      }
  }
}
typeTitle();


// 8. Button effect - About Pages 
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove translate-x-3 from all buttons to reset them
      buttons.forEach(btn => btn.classList.remove('translate-x-9'));
      
      // Add translate-x-3 to the clicked button to shift it right
      button.classList.add('translate-x-9');
    });
  });
});


// 9. About Pages - clicked
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  const contentItems = document.querySelectorAll('.content-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
  
      contentItems.forEach(item => {
        item.classList.add('hidden', 'opacity-0', 'translate-x-4');
        item.classList.remove('opacity-100', 'translate-x-0');
      });

      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('hidden');
        setTimeout(() => {
          targetContent.classList.remove('opacity-0', 'translate-x-4');
          targetContent.classList.add('opacity-100', 'translate-x-0');
        }, 10); 
      }
    });
  });
});



// 10. hover shadow - about pages
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.content-item');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(i => i.classList.remove('bg-gray-200'));
      
    });
  });
});


// 11. Mobile Views - About pages
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const allContentItems = document.querySelectorAll('.content-item');
      
      allContentItems.forEach(item => {
        item.classList.add('hidden');
        item.classList.remove('opacity-100', 'translate-x-0');
        item.classList.add('opacity-0', 'translate-x-4');
      });
      const targetContent = document.getElementById(targetId);
      targetContent.classList.remove('hidden');
      setTimeout(() => {
        targetContent.classList.remove('opacity-0', 'translate-x-4');
        targetContent.classList.add('opacity-100', 'translate-x-0');
      }, 10); 
    });
  });
});



// 12. Adjust to the key projects and certificates to move up - about page
function adjustMargins() {
  const projectsContent = document.getElementById('projects-content');
  const certificatesContent = document.getElementById('certificates-content');
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    projectsContent.style.marginTop = '-100px'; 
    certificatesContent.style.marginTop = '-100px'; 
  } else {
    projectsContent.style.marginTop = '-40px'; 
    certificatesContent.style.marginTop = '-30px';  
  }
}
window.addEventListener('load', adjustMargins);
window.addEventListener('resize', adjustMargins);




// 13. Automatic Full screen a video - projects
document.addEventListener('DOMContentLoaded', function () {
  // Video 1 (Rabbitech)
  const video1 = document.getElementById('rabbittechVideo1');
  const playButton1 = document.getElementById('playButton1');

  // Video 2 (Monitoring System)
  const video2 = document.getElementById('rabbittechVideo2');
  const playButton2 = document.getElementById('playButton2');

  function setupVideo(video, playButton) {
    playButton.addEventListener('click', function () {
      video.play();
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
      playButton.style.display = 'none';
    });

    video.addEventListener('pause', function () {
      playButton.style.display = 'flex'; 
    });

    video.addEventListener('play', function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
      playButton.style.display = 'none'; 
    });
  }
  setupVideo(video1, playButton1);
  setupVideo(video2, playButton2);
});



// 14. Sent via EmailJS functions
function sendMail() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    showErrorModal("Please fill in all fields.");
    return;
  }

  let parms = {
    name: name,
    email: email,
    message: message,
    subject: "Notification"
  }

  emailjs.send("service_in47oba", "template_ulunkd6", parms)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      showSuccessModal();

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      showErrorModal("Failed to send email: " + error.text);
    });
}

function sendMailMobile() {

  const name = document.getElementById("name-mobile").value;
  const email = document.getElementById("email-mobile").value;
  const message = document.getElementById("message-mobile").value;

  if (!name || !email || !message) {
    showErrorModal("Please fill in all fields.");
    return;
  }

  let parms = {
    name: name,
    email: email,
    message: message,
    subject: "Notification"
  }

  emailjs.send("service_in47oba", "template_ulunkd6", parms)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      showSuccessModal();
     
      document.getElementById("name-mobile").value = "";
      document.getElementById("email-mobile").value = "";
      document.getElementById("message-mobile").value = "";
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      showErrorModal("Failed to send email: " + error.text);
    });
}


function showSuccessModal() {
  document.getElementById("successModal").classList.remove("hidden");
}

function showErrorModal(message) {
  document.getElementById("errorMessage").textContent = message;
  document.getElementById("errorModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("successModal").classList.add("hidden");
  document.getElementById("errorModal").classList.add("hidden");
}


//15. Certificate pages - style, adjustment, and button
document.addEventListener('DOMContentLoaded', () => {
  // Button effect
  const certButtons = document.querySelectorAll('.toggle-btn-cert button');
  certButtons.forEach(button => {
    button.addEventListener('click', () => {
      certButtons.forEach(btn => btn.classList.remove('translate-x-9'));
      button.classList.add('translate-x-9');
    });
  });

  // Content toggle functionality
  const certToggleButtons = document.querySelectorAll('.toggle-btn-cert');
  const certContentItems = document.querySelectorAll('.cert-content-item');

  // Show first certificate by default
  certContentItems.forEach((item, index) => {
    if (index !== 0) {
      item.classList.add('hidden');
    }
  });

  certToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      
      certContentItems.forEach(item => {
        item.classList.add('hidden', 'opacity-0', 'translate-x-4');
        item.classList.remove('opacity-100', 'translate-x-0');
      });

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('hidden');
        setTimeout(() => {
          targetContent.classList.remove('opacity-0', 'translate-x-4');
          targetContent.classList.add('opacity-100', 'translate-x-0');
        }, 10);
      }
    });
  });

  // Hover effect for content items
  certContentItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      certContentItems.forEach(i => i.classList.remove('bg-[#fcf4ff]'));
    });
  });

  // Desktop-only margin adjustments (NO mobile changes)
  function adjustDesktopMargins() {
    const isDesktop = window.innerWidth >= 768;
    
    // Only apply changes if desktop view
    if (isDesktop) {
      const codequestCert = document.getElementById('codequest-content');
      const csharpCert = document.getElementById('csharp-content');
      const frontendCert = document.getElementById('frontend-content');
      
      if (codequestCert) codequestCert.style.marginTop = '-98px';
      if (csharpCert) csharpCert.style.marginTop = '-98px';
      if (frontendCert) frontendCert.style.marginTop = '-98px';
    }
    // No else clause - mobile styles remain completely untouched
  }

  // Initial adjustments (only runs if desktop)
  adjustDesktopMargins();
  
  // Adjust on resize (only affects desktop)
  window.addEventListener('resize', adjustDesktopMargins);
});


// 16. 
