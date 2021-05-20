/**
 * adding new sections and detect number of sections
 */

let sectionsNumber = 3;
const addNewSection = () => {
  sectionsNumber++;
  const sectionText = `<section id="section${sectionsNumber}" data-nav="Section ${sectionsNumber}">
    <div class="landing__container">
    <h2>Section ${sectionsNumber}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
  document.getElementById("f10").insertAdjacentHTML("beforeend", sectionText);
};
/**
 insert sections in the menu bar
 */
const menuBar = document.getElementById("navbar__list");
const newMenuBarItem = () => {
  document.getElementById("navbar__list").innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const newSection = `<li><a href="#${section.id}" data-nav="${section.id}"
     class="menu__link">${section.dataset.nav}</a></li>`;
    menuBar.insertAdjacentHTML("beforeend", newSection);
  });
};

//Section Active State
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(activeSection) {
    let ActiveState = menuBar.querySelector(`[data-nav=${activeSection.id}]`);
	if(activeSection.getBoundingClientRect().top >= -350 && activeSection.getBoundingClientRect().top <= 200){

    activeSection.classList.add("your-active-class");
    ActiveState.classList.add("your-active-section");

    }
    else{
         activeSection.classList.remove("your-active-class");
         ActiveState.classList.remove("your-active-section");
    }
	});
}

addNewSection();
newMenuBarItem();


// creating new section button
document.getElementById("addingButton").addEventListener("click", () => {
  addNewSection();
  newMenuBarItem();
});

