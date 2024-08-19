document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const qrCodeLinks = {
        "AVRO App - Photo Upload Instructions": "https://humber.ca/onecard/myphoto.html",
        "Academic calendar": "https://humber.ca/admissions/office-of-the-registrar/academic-calendar.html",
        "Applying for scholarships": "https://humber.ca/admissions/office-of-the-registrar/academic-calendar.html",
        "COOP Work Permit": "https://international.humber.ca/student-services/permits-visas/coop-visas.html",
        "Change your School on your IRCC account": "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/change-schools/account.html",
        "Confirmation of Enrollment": "https://humber.ca/admissions/office-of-the-registrar/registration/confirmation-forms.html",
        "Contact form": "https://international.humber.ca/contact",
        "Flywire payment steps": "https://international.humber.ca/study-at-humber/application-process/payment-options.html",
        "General Immigration FAQs": "https://international.humber.ca/student-services/permits-visas/immigration-faqs.html",
        "Graduation information": "https://international.humber.ca/student-services/graduation-alumni/graduation.html",
        "Health insurance coverage": "https://morcare.ca/home/54-humber-college-international-students-/international-plan",
        "How to Extend a Study Permit within Canada": "https://international.humber.ca/student-services/permits-visas/study-permits.html",
        "Humber College- International Contact Form": "https://its.humber.ca/about-us/contact",
        "IT support": "https://its.humber.ca/about-us/contact",
        "Letter of invitation - IRCC": "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html",
        "Looking for jobs?": "https://careers.humber.ca/workstudy-international.php",
        "Looking to apply?": "https://international.humber.ca/study-at-humber/application-process.html",
        "North Campus Map": "https://humber.ca/contact-us/maps/?_ga=2.81540436.253978976.1634741761-1475477036.1631218779#north",
        "Official fee receipt - steps": "https://international.humber.ca/assets/files/academic-support-pdfs/FAQ-Fee-Receipt_Final.pdf",
        "Payment Options": "https://international.humber.ca/study-at-humber/application-process/fees.html",
        "Payment plan": "https://humber.ca/admissions/student-fees-financial-resources/tuition-and-expenses/payment-and-funding-options.html",
        "Post Graduate Work Permit": "https://international.humber.ca/student-services/permits-visas/postgraduate-work-permits.html",
        "Presto Card and TTC Photo ID": "https://www.ttc.ca/customer-service/TTC-Bathurst-Station-Photo-ID-Office",
        "Program Availability": "https://international.humber.ca/study-at-humber/program-availability.html",
        "Refund:Defferal policy": "https://international.humber.ca/study-at-humber/application-process/refund-information.html",
        "Registrar's office email": "mailto:enquiry@humber.ca",
        "Student photo ID support": "mailto:studentphotoid@humber.ca",
        "Study Permit Extension": "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html",
        "Study permit upload form": "https://app.geckoform.com/public/#/modern/FOEU036fqrR22JIo",
        "Temporary Residence Visa": "https://international.humber.ca/student-services/permits-visas/visas.html",
        "Upload photo ID": "https://humber.ca/onecard/myphoto.html",
        "Welcome to Humber International": "https://international.humber.ca/",
        "Working while studying": "https://international.humber.ca/student-services/permits-visas/working-while-studying.html"
        
    };

    function renderServiceList() {
        app.innerHTML = `
            <img src="https://humber.ca/brand/sites/default/files/logos/International_Centre/Humber_INTL_CTRE_2-col_hor.png" alt="Humber Logo" class="logo" />
            <input type="text" id="search" placeholder="Search..." style="width: 100%; padding: 10px; margin-bottom: 10px;" />
            <ul id="serviceList"></ul>
        `;
    
        const searchInput = document.getElementById('search');
        const serviceList = document.getElementById('serviceList');
    
        function filterServices() {
            const searchText = searchInput.value.toLowerCase();
            const filteredServices = Object.keys(qrCodeLinks).filter(service => 
                service.toLowerCase().includes(searchText)
            );
            serviceList.innerHTML = filteredServices.map(service => `
                <li data-service="${service}">${service}</li>
            `).join('');
            Array.from(serviceList.querySelectorAll('li')).forEach(li => {
                li.addEventListener('click', () => renderQRCodePage(li.dataset.service));
            });
        }
    
        searchInput.addEventListener('input', filterServices);
        filterServices();
    }

    function renderQRCodePage(serviceName) {
        app.innerHTML = `
        <div class="qr-page">
            <h2 class="service-title">${serviceName}</h2>
            <div id="qrCode" class="qr-container"></div>
            <button id="goBack">Go Back</button>
        </div>
    `;

        const qrCodeContainer = document.getElementById('qrCode');
        const url = qrCodeLinks[serviceName] || 'https://example.com/default';  // Default URL if not found
        new QRCode(qrCodeContainer, {
            text: url,
            width: 256,
            height: 256
        });

        document.getElementById('goBack').addEventListener('click', renderServiceList);
    }

    // Directly call renderServiceList when the page loads
    renderServiceList();
});
