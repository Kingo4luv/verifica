const Client = () => {
    return(
        <div className="mt-6 md:mt-32">
          <h2 className="font-semibold text-lg md:text-xl">
            Bringing solutions to 100 + banks and Fintechs
          </h2>
          <ul className="flex mt-6 md:mt-12 space-x-6 md:space-x-40 flex-nowrap overflow-x-auto scrolling-wrapper">
            <li className="client">
              <svg width="121" height="23" viewBox="0 0 121 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2254 0.142822H3.8926L3.88048 0.164841L3.00649 1.7569H10.2254C15.5727 1.7569 19.9103 6.09315 19.9103 11.4423C19.9103 16.7914 15.574 21.1276 10.2254 21.1276C4.87672 21.1276 0.539985 16.7909 0.539985 11.4423C0.539544 10.4305 0.698001 9.42482 1.00956 8.46217H2.85865C1.54785 11.7014 2.50677 15.4167 5.22146 17.6169C7.93615 19.8171 11.7696 19.9858 14.6671 18.0327C17.5646 16.0795 18.8462 12.4628 17.8251 9.12095C16.804 5.77911 13.7197 3.49644 10.2254 3.49635H2.05206L1.16638 5.10997H10.2254C13.0711 5.11058 15.5668 7.00968 16.326 9.75229C17.0852 12.4949 15.9213 15.4071 13.4809 16.8709C11.0405 18.3347 7.92333 17.9905 5.86113 16.0296C3.79888 14.0685 3.29839 10.9726 4.63766 8.46172H6.73252C5.33423 10.1032 5.2666 12.4965 6.56994 14.2144C7.87329 15.9323 10.1964 16.5117 12.1539 15.6071C14.1113 14.7026 15.1755 12.5578 14.7119 10.4519C14.2483 8.34601 12.3817 6.8465 10.2254 6.84764H0.211957L-0.674172 8.46217C-0.939418 9.43331 -1.07391 10.4356 -1.0741 11.4423C-1.0741 17.6825 3.98472 22.7417 10.2254 22.7417C16.466 22.7417 21.5248 17.6825 21.5248 11.4423C21.5248 5.20209 16.4655 0.142822 10.2254 0.142822ZM10.2254 8.46217C11.8713 8.46217 13.2055 9.79642 13.2055 11.4423C13.2055 13.0882 11.8713 14.4224 10.2254 14.4224C8.5795 14.4224 7.24525 13.0882 7.24525 11.4423C7.24525 9.79642 8.5795 8.46217 10.2254 8.46217ZM26.4915 11.6809C26.4915 8.54168 28.5977 6.33625 31.7561 6.33625C33.7032 6.33625 35.2926 7.19005 36.127 8.62123L34.2995 9.91266C33.723 8.99825 32.849 8.56148 31.8159 8.56148C30.1084 8.56148 28.9751 9.77474 28.9751 11.6809C28.9751 13.5682 30.1075 14.7998 31.8159 14.7998C32.8495 14.7998 33.723 14.3429 34.2995 13.4289L36.127 14.7203C35.2926 16.1708 33.7032 17.0053 31.7561 17.0053C28.5977 17.0053 26.4915 14.7998 26.4915 11.6809ZM36.4704 11.6809C36.4704 8.74033 38.5567 6.33625 41.7953 6.33625C45.0533 6.33625 47.1194 8.74033 47.1194 11.6809C47.1194 14.6017 45.0524 17.0053 41.7953 17.0053C38.5589 17.0053 36.4704 14.6012 36.4704 11.6809ZM44.6361 11.6809C44.6361 9.83315 43.543 8.54168 41.7953 8.54168C40.0471 8.54168 38.9539 9.83315 38.9539 11.6809C38.9539 13.5084 40.0467 14.7998 41.7953 14.7998C43.5435 14.7998 44.6361 13.5084 44.6361 11.6809ZM63.0296 6.61352L59.9288 16.7263H57.3108L55.1194 9.59364L52.9088 16.7263H50.2871L47.2047 6.61352H49.6096L51.7039 13.9047L53.9533 6.61352H56.2806L58.5304 13.9047L60.6051 6.61352H63.0296ZM97.088 6.61352L93.9847 16.7263H91.3667L89.1749 9.59364L86.9643 16.7263H84.348L81.2647 6.61576H83.6696L85.7639 13.907L88.0112 6.61352H90.3386L92.5884 13.9047L94.6635 6.61352H97.088ZM70.2835 6.57486V8.83964C69.9153 8.77866 69.5435 8.74548 69.1708 8.74033C67.4026 8.74033 66.4688 9.63454 66.4688 11.7402V16.7281H64.0463V6.61352H66.428V8.30311C66.9247 7.13119 68.0173 6.43556 69.408 6.43556C69.7059 6.42976 70.0022 6.47695 70.2835 6.57486ZM80.3394 6.61352V15.7129C80.3394 19.1105 78.452 20.9776 75.1141 20.9776C73.3855 20.9776 71.7961 20.4613 70.8422 19.5671L71.9353 17.7989C72.7888 18.4729 73.9018 18.8121 74.9749 18.8121C76.8427 18.8121 77.9553 17.7593 77.9553 15.7116V14.8394C77.379 15.952 76.1475 16.6274 74.6569 16.6274C72.5112 16.6274 71.1606 15.2766 71.1606 12.8128V6.61352H73.5843V12.1972C73.5843 13.747 74.2202 14.4224 75.4912 14.4224C76.9618 14.4224 77.9353 13.5286 77.9353 12.0579V6.61352H80.3394ZM97.7255 3.41592C97.7255 2.54148 98.3414 1.90564 99.2753 1.90564C100.189 1.90564 100.803 2.54148 100.803 3.41592C100.803 4.29037 100.187 4.92576 99.2753 4.92576C98.3414 4.92576 97.7255 4.28993 97.7255 3.41592ZM98.0635 6.61442H100.487V16.7272H98.0635V6.61442ZM101.707 15.078L103.018 13.548C103.812 14.4224 105.044 14.9387 106.336 14.9387C107.488 14.9387 108.124 14.5019 108.124 13.8661C108.124 13.3296 107.726 12.9921 106.713 12.7535L105.064 12.376C102.958 11.8795 102.064 10.9058 102.064 9.51499C102.064 7.64748 103.614 6.33625 106.237 6.33625C108.025 6.33625 109.514 6.95188 110.389 7.94584L109.097 9.51499C108.223 8.76009 107.23 8.40242 106.177 8.40242C105.044 8.40242 104.488 8.81984 104.488 9.43593C104.488 9.91266 104.825 10.2106 105.898 10.4487L107.647 10.8662C109.772 11.343 110.547 12.3163 110.547 13.707C110.547 15.7138 108.997 17.0053 106.316 17.0053C104.309 17.0053 102.621 16.2504 101.707 15.078ZM121.312 12.3958H113.781C114.039 14.0252 115.112 14.8992 116.761 14.8992C117.893 14.8992 118.847 14.4822 119.582 13.6275L121.032 15.0583C120.079 16.2899 118.549 17.0053 116.681 17.0053C113.463 17.0053 111.317 14.8992 111.317 11.7204C111.317 8.58123 113.384 6.33625 116.443 6.33625C119.383 6.33625 121.37 8.38262 121.37 11.462C121.37 11.7742 121.35 12.086 121.312 12.3958ZM113.781 10.7476H118.948C118.829 9.25707 117.915 8.44282 116.465 8.44282C114.974 8.44237 114.04 9.29662 113.781 10.7476Z" fill="#011B33"/>
              </svg>
            </li>
            <li>
              <svg width="121" height="23" viewBox="0 0 121 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.4926 18.6791V23H29.7826V8.93368H32.4926V9.60665C33.2996 9.08189 34.2399 8.79877 35.2025 8.79065C38.2799 8.79065 40.5427 11.2372 40.5427 14.1519C40.5427 17.0666 38.3009 19.5131 35.2025 19.5131C34.2358 19.5147 33.2911 19.224 32.4926 18.6791ZM32.4926 12.8692V15.3563C32.7063 15.8115 33.0386 16.2008 33.4544 16.4835C33.8703 16.7662 34.3545 16.9319 34.8564 16.9633C35.3583 16.9946 35.8594 16.8905 36.3072 16.6617C36.755 16.433 37.1331 16.0881 37.4019 15.663C37.6707 15.238 37.8202 14.7486 37.8349 14.2459C37.8496 13.7433 37.7289 13.2459 37.4855 12.8059C37.242 12.3659 36.8847 11.9995 36.4511 11.7449C36.0174 11.4904 35.5232 11.3571 35.0204 11.3591C34.5005 11.3518 33.9888 11.4891 33.5424 11.7558C33.096 12.0224 32.7325 12.4079 32.4926 12.8692Z" fill="#011B33"/>
              <path d="M42.0106 6.09871C42.0017 5.89358 42.0349 5.6888 42.1081 5.49697C42.1813 5.30514 42.293 5.13031 42.4363 4.98323C42.5795 4.83615 42.7514 4.71994 42.9412 4.64172C43.1311 4.56351 43.3349 4.52496 43.5402 4.52843C43.7483 4.52482 43.9551 4.56283 44.1483 4.64021C44.3415 4.7176 44.5174 4.83282 44.6655 4.9791C44.8136 5.12537 44.931 5.29976 45.0107 5.49203C45.0905 5.68429 45.1311 5.89056 45.13 6.09871C45.1257 6.51735 44.9562 6.91734 44.6585 7.21168C44.3607 7.50603 43.9589 7.67092 43.5402 7.6705C43.336 7.66955 43.1341 7.62794 42.9462 7.54809C42.7582 7.46823 42.5881 7.35174 42.4457 7.20542C42.3033 7.0591 42.1915 6.88587 42.1168 6.69585C42.0421 6.50584 42.006 6.30284 42.0106 6.09871ZM42.1747 8.93365H44.9268V19.3505H42.1747V8.93365Z" fill="#011B33"/>
              <path d="M46.5558 14.1127C46.5503 13.4116 46.685 12.7164 46.952 12.0681C47.219 11.4198 47.613 10.8315 48.1106 10.3376C48.6083 9.8437 49.1997 9.4543 49.85 9.19225C50.5003 8.93021 51.1964 8.80081 51.8975 8.81167C52.856 8.81215 53.7995 9.05009 54.6436 9.50422V8.93361H57.3355V18.7588C57.3355 21.4688 54.9899 22.9382 52.0556 22.9382C50.139 22.9382 48.3038 22.3676 47.1008 21.4326L48.2225 19.4965C49.3657 20.2289 50.6979 20.6114 52.0556 20.5971C53.9511 20.5971 54.5427 19.8443 54.624 18.6203C53.8075 19.1425 52.8607 19.4248 51.8915 19.4348C48.772 19.4318 46.5558 17.1087 46.5558 14.1127ZM54.6436 15.2735V12.9504C54.4159 12.4657 54.0557 12.0553 53.6047 11.7665C53.1537 11.4777 52.6302 11.3224 52.0947 11.3184C51.7249 11.3148 51.3581 11.3844 51.0152 11.523C50.6724 11.6617 50.3604 11.8668 50.0971 12.1265C49.8338 12.3861 49.6244 12.6953 49.4809 13.0362C49.3375 13.377 49.2629 13.7429 49.2613 14.1127C49.2613 15.7221 50.4838 16.8437 52.0751 16.8437C52.6091 16.8576 53.1357 16.7168 53.5914 16.4382C54.0472 16.1596 54.4126 15.7551 54.6436 15.2735Z" fill="#011B33"/>
              <path d="M58.969 14.1127C58.9635 13.4116 59.0982 12.7164 59.3652 12.0681C59.6323 11.4198 60.0262 10.8315 60.5238 10.3376C61.0215 9.8437 61.6129 9.4543 62.2632 9.19225C62.9135 8.93021 63.6096 8.80081 64.3107 8.81167C65.2712 8.81134 66.2168 9.0493 67.0628 9.50422V8.93361H69.7532V18.7588C69.7532 21.4688 67.4091 22.9382 64.4748 22.9382C62.5582 22.9382 60.723 22.3676 59.5201 21.4326L60.6417 19.4965C61.7848 20.2291 63.1171 20.6117 64.4748 20.5971C66.3703 20.5971 66.9619 19.8443 67.0432 18.6203C66.2266 19.1423 65.2798 19.4245 64.3107 19.4348C61.1912 19.4318 58.969 17.1087 58.969 14.1127ZM67.0628 15.2735V12.9504C66.835 12.4658 66.4748 12.0555 66.0238 11.7667C65.5728 11.478 65.0494 11.3226 64.5139 11.3184C64.1441 11.3148 63.7773 11.3844 63.4345 11.523C63.0916 11.6617 62.7796 11.8668 62.5163 12.1265C62.253 12.3861 62.0436 12.6953 61.9002 13.0362C61.7567 13.377 61.6821 13.7429 61.6805 14.1127C61.6805 15.7221 62.903 16.8437 64.4944 16.8437C65.0283 16.8575 65.5548 16.7165 66.0105 16.4379C66.4662 16.1593 66.8316 15.7549 67.0628 15.2735Z" fill="#011B33"/>
              <path d="M73.7068 8.93372L76.4393 15.8848L79.2517 8.93372H82.1122L76.1126 23H73.5652L75.0708 19.2497L70.6912 8.93372H73.7068Z" fill="#011B33"/>
              <path d="M81.5928 8.93372H84.5075L87.1633 15.9676L89.7934 8.93372H92.654L88.4746 19.3506H85.733L81.5928 8.93372Z" fill="#011B33"/>
              <path d="M92.8467 14.0706C92.8467 11.1363 94.9454 8.70935 98.2275 8.70935C101.266 8.70935 103.574 10.9933 103.629 13.9938C103.65 14.2518 103.65 14.5111 103.629 14.7692H95.4151C95.4964 16.2371 96.9026 17.1946 98.4112 17.1946C99.6547 17.1946 100.388 16.8483 101.245 16.1407L102.734 17.711C101.529 18.9741 100.325 19.5658 98.4112 19.5658C94.8852 19.5553 92.8467 16.9251 92.8467 14.0706ZM95.5567 12.827H100.817C100.552 11.8499 99.6126 10.9933 98.1868 10.9933C96.5353 10.9933 95.8427 11.8288 95.5567 12.827Z" fill="#011B33"/>
              <path d="M104.198 18.2304L105.531 16.0685C106.727 16.8656 108.129 17.2977 109.566 17.3121C110.933 17.3121 111.625 16.9658 111.625 16.3756C111.625 15.9872 111.299 15.7026 110.606 15.5596L107.746 14.9484C105.647 14.4967 104.688 13.5015 104.688 11.871C104.688 10.1382 106.156 8.68982 109.194 8.68982C111.028 8.68982 112.657 9.22128 113.78 9.91383L112.536 11.993C111.619 11.5037 110.397 10.9737 109.111 10.9737C107.95 10.9737 107.277 11.2598 107.277 11.7882C107.277 12.136 107.523 12.3603 108.194 12.4823L110.603 12.9339C113.212 13.4428 114.216 14.6051 114.216 16.1754C114.216 18.4337 111.958 19.6201 109.486 19.6201C107.629 19.6559 105.798 19.1748 104.198 18.2304Z" fill="#011B33"/>
              <path d="M114.758 8.93366H116.308V6.05958L119.018 4.30713V8.93366H120.607V11.2989H119.019V19.352H116.309V11.2989H114.757V8.93366H114.758Z" fill="#011B33"/>
              <path d="M22.9967 10.6093C22.9515 9.94811 22.8431 9.29273 22.673 8.65214C21.8976 5.79161 20.2641 3.54083 17.7739 1.93441C16.2055 0.914335 14.4038 0.308792 12.5377 0.174434C11.7536 0.117168 10.9658 0.138351 10.186 0.237667C9.36446 0.346406 8.55691 0.542742 7.77714 0.823323C5.70071 1.57233 3.88849 2.91191 2.56337 4.67731C1.23825 6.4427 0.458036 8.55692 0.318685 10.7599C0.293091 11.1649 0.293091 11.5729 0.293091 11.9794V21.8618C0.293091 22.1185 0.395083 22.3648 0.57663 22.5463C0.758177 22.7278 1.00441 22.8298 1.26115 22.8298H5.07921C5.31815 22.8284 5.54824 22.7393 5.72584 22.5794C5.90344 22.4196 6.01621 22.2001 6.04276 21.9626C6.06788 21.8699 6.08103 21.7742 6.0819 21.6781V21.4493C6.07965 21.4318 6.07965 21.4141 6.0819 21.3966V21.371C6.10794 21.3779 6.13246 21.3896 6.15417 21.4056C7.58229 22.1953 9.16394 22.6678 10.7912 22.7907C11.443 22.8389 12.0977 22.8324 12.7484 22.7711C14.2803 22.63 15.767 22.1768 17.117 21.4394C18.4671 20.702 19.6518 19.696 20.5983 18.4833C21.9475 16.7862 22.773 14.7328 22.9741 12.5741C23.0422 11.9213 23.0497 11.2636 22.9967 10.6093ZM13.6924 16.9236C13.6857 16.9584 13.6669 16.9897 13.6394 17.012C13.6118 17.0343 13.5773 17.0462 13.5419 17.0455H9.77801C9.74257 17.0462 9.70805 17.0343 9.68051 17.012C9.65297 16.9897 9.63418 16.9584 9.62745 16.9236V16.8995V16.7595C9.62662 16.5867 9.64582 16.4144 9.68466 16.2461C9.70875 16.1889 9.72381 16.1211 9.7479 16.0579C9.77198 15.9947 9.79607 15.936 9.82016 15.8742C9.84425 15.8125 9.88339 15.7568 9.91652 15.7041L9.97072 15.6228C10.0061 15.5702 10.0448 15.5199 10.0866 15.4723C10.1303 15.4181 10.174 15.3714 10.2176 15.3217C10.4441 15.0989 10.7194 14.9319 11.0216 14.8339C10.7613 14.6922 10.5555 14.4678 10.4367 14.1962C10.3179 13.9247 10.2928 13.6213 10.3655 13.3339C10.4381 13.0465 10.6043 12.7915 10.8378 12.6089C11.0714 12.4264 11.359 12.3267 11.6554 12.3257C12.0093 12.3283 12.3481 12.4694 12.5994 12.7186C12.7449 12.865 12.8544 13.0431 12.9193 13.239C12.9843 13.4349 13.0029 13.6432 12.9737 13.8475C12.9445 14.0518 12.8683 14.2465 12.7511 14.4164C12.6339 14.5862 12.4789 14.7266 12.2983 14.8264C12.7048 14.9604 13.0586 15.2195 13.309 15.5667C13.5594 15.9139 13.6936 16.3314 13.6924 16.7595C13.6924 16.8137 13.6924 16.8724 13.6924 16.9236ZM20.1813 8.72441H3.14459C3.11265 8.72419 3.08123 8.7164 3.05289 8.70166C3.02456 8.68693 3.00013 8.66568 2.98161 8.63967C2.96309 8.61365 2.95101 8.58361 2.94636 8.55202C2.94172 8.52042 2.94464 8.48817 2.95489 8.45793C3.59059 6.65639 4.76943 5.09639 6.32892 3.99294C7.88842 2.88949 9.75179 2.29693 11.6622 2.29693C13.5726 2.29693 15.436 2.88949 16.9955 3.99294C18.555 5.09639 19.7338 6.65639 20.3695 8.45793C20.3797 8.48806 20.3826 8.52017 20.3781 8.55165C20.3735 8.58313 20.3616 8.61308 20.3432 8.63907C20.3249 8.66505 20.3006 8.68633 20.2725 8.70116C20.2444 8.71599 20.2131 8.72396 20.1813 8.72441Z" fill="#011B33"/>
              </svg>
            </li>
            <li className="-mt-6 client">
              <svg width="125" height="78" viewBox="0 0 125 78" fill="none">
                <rect x="0.601562" y="0.142822" width="124.286" height="77.8571" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0" transform="translate(-0.00114943) scale(0.00313218 0.005)"/>
                </pattern>
                <image id="image0" width="320" height="200" href="data:image/png;base64,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"/>
                </defs>
                </svg>
            </li>
            <li className="-mt-6 client">
                <img src="./assets/abn.png" />
            </li>
            <li className="client">
            <svg width="106" height="23" viewBox="0 0 106 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M32.3639 3.28503H26.7982C26.6209 3.28503 26.4656 3.44025 26.4656 3.61763V16.1675C26.4656 16.3449 26.6209 16.5001 26.7982 16.5001H32.3861C36.7765 16.5001 39.6147 13.9059 39.6147 9.89258C39.6147 5.8571 36.7765 3.28503 32.3639 3.28503ZM32.3639 12.9968H30.4569V6.76619H32.3861C34.3595 6.76619 35.5569 7.91918 35.5569 9.87039C35.5569 11.4225 34.4704 12.9968 32.3639 12.9968Z" fill="#011B33"/>
                <path d="M64.3162 6.67749C62.7862 6.67749 61.5223 7.52006 60.968 8.36263C60.5688 7.25398 59.6376 6.67749 58.2184 6.67749C56.6441 6.67749 55.4689 7.47572 55.0476 8.00787V7.25398C55.0476 7.0766 54.8924 6.92139 54.715 6.92139H51.8102C51.6328 6.92139 51.4776 7.0766 51.4776 7.25398V16.1453C51.4776 16.3227 51.6328 16.4779 51.8102 16.4779H54.715C54.8924 16.4779 55.0476 16.3227 55.0476 16.1453V10.5799C55.2471 10.336 55.6906 9.82605 56.4889 9.82605C57.1985 9.82605 57.5754 10.203 57.5754 10.8904V16.1453C57.5754 16.3227 57.7306 16.4779 57.908 16.4779H60.8128C60.9902 16.4779 61.1454 16.3227 61.1454 16.1453V10.5799C61.3449 10.336 61.7884 9.82605 62.6088 9.82605C63.2962 9.82605 63.6954 10.2252 63.6954 10.8904V16.1453C63.6954 16.3227 63.8506 16.4779 64.028 16.4779H66.9327C67.1101 16.4779 67.2653 16.3227 67.2653 16.1453V9.5378C67.2875 7.69744 66.2232 6.67749 64.3162 6.67749Z" fill="#011B33"/>
                <path d="M71.9663 6.92139H69.0615C68.8842 6.92139 68.7289 7.0766 68.7289 7.25398V16.1453C68.7289 16.3227 68.8842 16.4779 69.0615 16.4779H71.9663C72.1437 16.4779 72.2989 16.3227 72.2989 16.1453V7.25398C72.2989 7.0766 72.1437 6.92139 71.9663 6.92139Z" fill="#011B33"/>
                <path d="M70.5916 2.2207C69.4829 2.2207 68.5959 3.10762 68.5959 4.21627C68.5959 5.32492 69.5051 6.21183 70.5916 6.21183C71.7003 6.21183 72.5872 5.32492 72.5872 4.21627C72.6094 3.12979 71.7003 2.2207 70.5916 2.2207Z" fill="#011B33"/>
                <path d="M80.6582 6.67749C78.8178 6.67749 77.7978 7.49789 77.3765 8.00787V7.25398C77.3765 7.0766 77.2213 6.92139 77.0439 6.92139H74.1391C73.9617 6.92139 73.8065 7.0766 73.8065 7.25398V16.1453C73.8065 16.3227 73.9617 16.4779 74.1391 16.4779H77.0439C77.2213 16.4779 77.3765 16.3227 77.3765 16.1453V10.5799C77.5982 10.3138 78.0417 9.82604 78.9065 9.82604C79.8378 9.82604 80.3034 10.2917 80.3034 11.2008V16.1675C80.3034 16.3449 80.4587 16.5001 80.636 16.5001H83.5408C83.7182 16.5001 83.8734 16.3449 83.8734 16.1675V9.71518C83.8512 7.80831 82.6539 6.67749 80.6582 6.67749Z" fill="#011B33"/>
                <path d="M45.3799 6.63318C42.586 6.63318 40.3243 8.89482 40.3243 11.6886C40.3243 14.4824 42.586 16.7441 45.3799 16.7441C48.1738 16.7441 50.4355 14.4824 50.4355 11.6886C50.4133 8.89482 48.1516 6.63318 45.3799 6.63318ZM45.3799 13.3516C44.4264 13.3516 43.6503 12.5755 43.6503 11.6221C43.6503 10.6687 44.4264 9.8926 45.3799 9.8926C46.3334 9.8926 47.1094 10.6687 47.1094 11.6221C47.0873 12.5755 46.3334 13.3516 45.3799 13.3516Z" fill="#011B33"/>
                <path d="M89.9491 6.65527C87.1552 6.65527 84.8935 8.91691 84.8935 11.7107C84.8935 14.5045 87.1552 16.7662 89.9491 16.7662C92.743 16.7662 95.0048 14.5045 95.0048 11.7107C95.0048 8.91691 92.743 6.65527 89.9491 6.65527ZM89.9491 13.3515C88.9956 13.3515 88.2196 12.5754 88.2196 11.622C88.2196 10.6686 88.9956 9.89253 89.9491 9.89253C90.9026 9.89253 91.6787 10.6686 91.6787 11.622C91.6787 12.5754 90.9026 13.3515 89.9491 13.3515Z" fill="#011B33"/>
                <path d="M97.7986 3.8394C97.7986 3.81723 97.7986 3.81723 97.7986 3.8394C97.7986 3.81723 97.7986 3.81723 97.7986 3.81723C97.5769 2.81945 96.4904 2.10992 95.426 2.33165C94.3395 2.55338 93.6299 3.55116 93.8517 4.57111C94.0291 5.41369 94.7608 5.99018 95.6256 6.03452C95.5812 6.36712 95.2708 6.67755 95.0269 6.83273C94.8495 6.92146 94.9604 7.09883 94.9604 7.09883L95.1821 7.43142C95.2486 7.5423 95.3373 7.6088 95.4482 7.5423C97.6434 6.61102 98.0203 4.72632 97.7986 3.8394Z" fill="#011B33"/>
                <path d="M100.371 9.75958C100.371 9.40481 100.814 9.2496 101.413 9.2496C102.566 9.2496 103.231 9.58219 103.963 10.07C104.03 10.1143 104.14 10.1365 104.229 10.1143C104.318 10.0922 104.406 10.0256 104.451 9.95913L105.426 8.25182C105.515 8.0966 105.471 7.89705 105.316 7.80835C104.517 7.32055 103.342 6.69971 101.28 6.69971C98.3308 6.69971 96.7565 8.09661 97.0226 10.0922C97.4882 13.5955 102.943 12.3982 102.854 13.5955C102.832 13.8616 102.344 14.0833 101.524 14.0833C100.437 14.0833 99.2178 13.5512 98.4417 13.0633C98.3752 13.019 98.2643 12.9968 98.1756 13.019C98.0869 13.0412 98.0204 13.1077 97.9761 13.1742L96.8452 15.0589C96.7565 15.2141 96.8008 15.4137 96.9561 15.5024C98.0426 16.2341 99.7943 16.7219 101.324 16.7219C104.273 16.7219 105.981 15.458 105.981 13.3738C105.936 9.51567 100.393 10.713 100.371 9.75958Z" fill="#011B33"/>
                <path d="M22.3341 6.76715L16.1176 0.544938C15.8639 0.290969 15.5044 0.142822 15.145 0.142822C14.7644 0.142822 14.4261 0.290969 14.1723 0.544938L8.9497 5.7513L0.280539 14.4285C-0.269213 14.9788 -0.269213 15.8465 0.280539 16.3968L6.47581 22.5978C6.72956 22.8518 7.089 23 7.44844 23C7.82904 23 8.16736 22.8518 8.42108 22.5978L16.181 14.8307L22.2917 8.71425C22.8626 8.18517 22.8626 7.29628 22.3341 6.76715Z" fill="white"/>
                <path d="M21.8901 7.19049L15.6736 0.989434C15.3776 0.693138 14.8913 0.693138 14.5953 0.989434L7.89252 7.69841L15.1873 15L21.8901 8.29104C22.1861 7.97357 22.1861 7.50795 21.8901 7.19049ZM16.4348 8.98943C16.0754 9.34924 15.6313 9.51855 15.1662 9.51855C14.701 9.51855 14.2569 9.34924 13.8975 8.98943C13.5381 8.62965 13.3689 8.18519 13.3689 7.71961C13.3689 7.25399 13.5381 6.78837 13.8975 6.44975C14.2569 6.08998 14.701 5.92067 15.1662 5.92067C15.6313 5.92067 16.0754 6.08998 16.4348 6.44975C16.7943 6.80952 16.9634 7.25399 16.9634 7.71961C16.9634 8.18519 16.7731 8.65081 16.4348 8.98943Z" fill="#011B33"/>
                <path d="M0.745758 14.8518C0.449738 15.1481 0.449738 15.6349 0.745758 15.9312L6.94103 22.1534C7.08906 22.3016 7.27936 22.3862 7.49081 22.3862C7.6811 22.3862 7.89251 22.3016 8.04054 22.1534L14.7433 15.4444L7.4485 8.14282L0.745758 14.8518ZM6.11643 16.6508C5.75695 16.9894 5.31294 17.1799 4.84773 17.1799C4.38258 17.1799 3.9174 17.0106 3.57909 16.6508C3.21964 16.291 3.05049 15.8465 3.05049 15.3809C3.05049 14.9153 3.21964 14.4497 3.57909 14.1111C3.93855 13.7513 4.38258 13.582 4.84773 13.582C5.31294 13.582 5.7781 13.7513 6.11643 14.1111C6.47587 14.4709 6.64501 14.9153 6.64501 15.3809C6.64501 15.8465 6.45471 16.291 6.11643 16.6508ZM8.84403 14.1746C9.20347 13.8148 9.64752 13.6455 10.1127 13.6455C10.5779 13.6455 11.043 13.8148 11.3813 14.1746C11.7408 14.5343 11.91 14.9788 11.91 15.4444C11.91 15.91 11.7408 16.3545 11.3813 16.7143C11.0219 17.074 10.5779 17.2433 10.1127 17.2433C9.64752 17.2433 9.20347 17.074 8.84403 16.7143C8.48455 16.3545 8.31541 15.91 8.31541 15.4444C8.31541 15 8.48455 14.5343 8.84403 14.1746Z" fill="#011B33"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="105.495" height="22.8571" fill="white" transform="translate(0.315796 0.142822)"/>
                </clipPath>
                </defs>
              </svg>
            </li>
          </ul>
        </div>
    )
}

export default Client;