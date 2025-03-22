Tổng quan dự án

Tên dự án
-Website giải pháp lưu trữ xe ạp tối ưu STEADYRACK.
Mô tả ngắn :
- Đây là một trang web thương mai điện tử chuyên cung cấp các giải pháp lưu trữ xe đạp, trang web này bán các loại giá treo xe đạp và phụ kiện liên quan được thiết kế giao diện bằng ReactJS và framework tailwincss giúp tối ưu hóa trải nghiệm.

Cấu trúc thư mục:

|--public/
|--src/
    |--assets/                     #Chứa hình ảnh và video tài liệu.
    |--component/
         |--backround Intro        # Các component hình ảnh intro, video contents.
         |--buttons                # Các component nút dùng chung.
         |--carousel               # Các component về carousel.(BlogCarousel, BrandsCarousel, CommunitySupportLogoA, CommunitySupportLogoB, ReviewsCrousel, TextCarouselImages, TolstoyCarousel)
         |--cart                   # Component về giỏ hàng (Cart, CompareProductCard)
         |--Comparemodel           # Các component về so sánh thông tin(CompareModel, CompareModelItem, CompareModelList).
         |--faq                    # Component về các câu hỏi dùng chung(FAQ).
         |--featured products      # Component về sản hẩm đặc trưng(FeaturedProduct).
         |--gallery                # Component về phần trưng bày.
         |--product                # Các component về phần sản phẩm(ProductGearmateList, ProductItem, ProductList, ProductNewList, ProductRackList, ProductSparePartList, ProflexRangerList).
         |--review                 #Component dung chung về phần đánh giá(ReviewComponent).
         |--shop by style          #Component về style(ShopByStyle).
         |--steadyrack ambassadors #Component về đại các sứ thương hiệu(SteadyrackAmbassadors).
         |--stories                #Component về các bài viết(StorieList).
         |--TextTitle              #Các component text(RichTextTitle, TextStep).
         |--timeLine               #Component về lịch sử(TimeLine).
         |--videoComponent         #Các component xử lý video(LineVideo, ModalVideo, VideoOverlay).
     |--configs
         |--Axios.js               #Cấu hình chung(Axios).
     |--contexts                   #Truyền dữ liệu qua nhiều tầng
         |--CartContext.jsx        
     |--data                       #Lưu dữ liệu test(communityData, data, galleryData, pressInfor, pressLogo, storieData).
     |--layout
         |--Banner.jsx
         |--Header.jsx
         |--Footer.jsx
         |--MainLayout.jsx         #Kết hợp 3 component Banner,header,footer để dung chung xuyên suốt các trang
     |--page
         |--about                  #Các trang đi kèm về about trong header
              |--AboutUs.jsx
              |--Ambassadors.jsx
              |--CommunitySupport.jsx
              |--Gallery.jsx
              |--Press.jsx
              |--Reviews.jsx
              |--Stories.jsx
         |--commercial              #Các trang đi kèm về commercial trong header
              |--BecomeADealer.jsx
              |--CommercialBikeParking.jsx
              |--CommercialEnquiries.jsx
              |--DesignFilesGuidelines.jsx
              |--IndoorBikeParking.jsx
              |--ProjectGallery.jsx
              |--RequestRevitFiles.jsx
         |--JustLanded              #Các trang đi kèm về JustLanded trong header
              |--ProflexRanger.jsx
              |--ShopAll.jsx
         |--login                 
              |--Login.jsx
         |--products                #trang về chi tiêt sản phẩm
              |--ProductDetail.jsx
         |--shop                    #Các trang đi kèm về shop trong header
              |--AllAccessories.jsx
              |--AllBikeRack.jsx
              |--AllGearMaster.jsx
              |--AllProduct.jsx
              |--AllSparePart.jsx
              |--ClassicRange.jsx
              |--ProflexRanger.jsx
         |--support                 #Các trang đi kèm về support trong header
              |--Faq.jsx
              |--Installation.jsx
              |--NeedHelp.jsx
              |--Shipping.jsx
              |--WallPlacementGuide.jsx
      |--Contact.jsx                #Trang về Contact.
      |--Home.jsx                   #Trang chính.
      |--routers                      
              |--index.js           #Quản lý điều hướng trang
      |--App.js
      |--index.css
|--tailwind.config.js
|--postcss.config.js
|--README
|--package.json
|--package-lock.json

