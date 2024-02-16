import { IconData } from '@equinor/eds-icons';

export type IconDataWithColor = IconData & {
  color: string;
};

export const acquire: IconData = {
  name: 'acquire',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M5.73913 18.0228C4.77863 18.0228 4 17.2441 4 16.2836L4 7.96169C4 7.0012 4.77864 6.22256 5.73913 6.22256L13.0026 6.22256V5.19527C13.0026 4.21785 13.8312 3.37775 14.8801 3.49009C15.5869 3.56579 16.7363 3.733 17.7351 4.10058C18.2318 4.28337 18.7638 4.54129 19.1879 4.91859C19.6292 5.31128 20 5.88143 20 6.62683V15.0906C20 15.9371 19.6601 16.6187 19.0891 17.0966C18.5636 17.5364 17.9062 17.7516 17.3176 17.868C16.3651 18.0564 15.2512 18.0393 14.4837 18.0275C14.3205 18.025 14.173 18.0228 14.0461 18.0228H5.73913ZM13.0026 8.30952V12.6454C13.0026 13.682 13.8804 14.4379 14.8375 14.4143C15.5025 14.3979 16.4167 14.4269 17.1315 14.6187C17.4904 14.715 17.7113 14.83 17.8253 14.9274C17.9058 14.9961 17.913 15.0306 17.913 15.0906C17.913 15.3235 17.8437 15.4175 17.7498 15.4961C17.6103 15.6128 17.347 15.7348 16.9126 15.8207C16.2009 15.9615 15.3796 15.9508 14.6127 15.9408C14.4195 15.9383 14.2297 15.9358 14.046 15.9358H6.08696L6.08696 8.30952L13.0026 8.30952Z',
};

export const dasha: IconData = {
  name: 'dasha',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M11.2207 2.72474C11.6966 2.42509 12.3022 2.42509 12.7781 2.72474L19.355 6.86576C19.78 7.13334 20.0379 7.60037 20.0379 8.10256V15.8974C20.0379 16.3996 19.78 16.8667 19.355 17.1342L12.7781 21.2753C12.3022 21.5749 11.6966 21.5749 11.2207 21.2753L4.64375 17.1342C4.21877 16.8667 3.96094 16.3996 3.96094 15.8974V8.10256C3.96094 7.60037 4.21877 7.13334 4.64375 6.86576L11.2207 2.72474ZM6.88401 10.6675V15.0906L10.5379 17.3911V12.8328L6.88401 10.6675ZM13.4609 12.8328V17.3911L17.1148 15.0906V10.6675L13.4609 12.8328ZM15.7732 8.06477L11.9994 10.3011L8.22557 8.06477L11.9994 5.68865L15.7732 8.06477Z',
};

export const recap: IconData = {
  name: 'recap',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M18.5749 6.36192C19.1567 6.87912 19.2091 7.77008 18.6919 8.35193L10.1206 17.9946L5.30821 12.5807C4.79101 11.9988 4.84342 11.1079 5.42527 10.5907C6.00712 10.0735 6.89808 10.1259 7.41528 10.7077L10.1206 13.7512L16.5848 6.47898C17.102 5.89713 17.993 5.84472 18.5749 6.36192Z',
};

export const portal: IconData = {
  name: 'portal',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M7.52581 8.96567L16.0682 4.08206C16.4308 3.87501 16.8834 4.13434 16.8838 4.54956L16.8836 14.3323C16.884 14.6222 16.7376 14.89 16.4846 15.0348L7.94199 19.9181C7.57962 20.1253 7.11757 19.866 7.11719 19.4507V9.66796C7.11681 9.37809 7.27278 9.11033 7.52581 8.96567Z',
};

export const pwex: IconData = {
  name: 'pwex',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M12.7668 15.1491H18.4664V7.62094H13.8628C13.2614 7.62094 12.7731 8.13262 12.7668 8.76635L12.7668 8.77894V15.1491ZM13.8628 6C13.1347 6 12.4757 6.31245 11.9994 6.81734C11.5231 6.31256 10.8642 6.00019 10.1362 6.00019H4.43649C4.19434 6.00019 3.99805 6.20754 3.99805 6.46331V19.253C3.99805 19.2723 3.99908 19.2911 4.00107 19.3094C4.0023 19.3207 4.0039 19.3319 4.00586 19.3429C4.06807 19.6923 4.48746 19.8493 4.74372 19.5834L7.32722 16.9029C7.40921 16.8178 7.51953 16.7702 7.63445 16.7702H12.7668V16.77H19.5625C19.8047 16.77 20.001 16.5627 20.001 16.3069V6.46313C20.001 6.20735 19.8047 6 19.5625 6H13.8628ZM6.66535 7.9048C6.24448 7.9048 5.9033 8.24598 5.9033 8.66685C5.9033 9.08771 6.24448 9.42889 6.66535 9.42889H9.78975C10.2106 9.42889 10.5518 9.08771 10.5518 8.66685C10.5518 8.24598 10.2106 7.9048 9.78975 7.9048H6.66535ZM5.90328 11.258C5.90328 10.8371 6.24446 10.4959 6.66533 10.4959H9.78973C10.2106 10.4959 10.5518 10.8371 10.5518 11.258C10.5518 11.6789 10.2106 12.02 9.78973 12.02H6.66533C6.24446 12.02 5.90328 11.6789 5.90328 11.258ZM6.66533 13.0868C6.24446 13.0868 5.90328 13.428 5.90328 13.8488C5.90328 14.2697 6.24446 14.6109 6.66533 14.6109H7.79751C8.21838 14.6109 8.55956 14.2697 8.55956 13.8488C8.55956 13.428 8.21838 13.0868 7.79752 13.0868H6.66533Z',
};

export const fourDInsight: IconData = {
  name: 'fourDInsight',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M5.33398 11.1475C5.33398 7.0982 8.50065 4.47998 12.0007 4.47998C15.5006 4.47998 18.6673 7.0982 18.6673 11.1475C18.6673 13.7332 16.6257 16.7742 12.559 20.2787C12.2423 20.5471 11.7673 20.5471 11.4507 20.2787C7.37565 16.7742 5.33398 13.7332 5.33398 11.1475ZM14.668 11.7014C14.668 13.3886 13.4013 14.4795 12.0013 14.4795C10.6013 14.4795 9.33464 13.3886 9.33464 11.7014C9.33464 10.624 10.1513 9.35691 11.778 7.8967C11.9046 7.78489 12.0946 7.78489 12.2213 7.8967C13.8513 9.35691 14.668 10.624 14.668 11.7014Z',
};

export const inPress: IconData = {
  name: 'inPress',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M16.1349 14.7431L16.8119 15.4062L18.5928 17.1923C18.9773 17.578 18.9768 18.2023 18.5915 18.5873C18.2067 18.972 17.5831 18.9726 17.1975 18.5887L15.4089 16.8083L14.7503 16.1282L15.1564 15.8081C14.0901 16.7241 12.7058 17.2756 11.1999 17.2756C7.84197 17.2756 5.12012 14.5555 5.12012 11.1998C5.12012 7.84412 7.84197 5.12402 11.1999 5.12402C14.5577 5.12402 17.2796 7.84412 17.2796 11.1998C17.2796 12.7048 16.7277 14.0882 15.8111 15.1538L16.1349 14.7431ZM6.9908 11.1998C6.9908 11.7856 7.10986 12.3429 7.32518 12.849C7.52626 13.3216 7.83051 13.6987 8.14615 14.0981C8.91243 14.9043 9.99618 15.4062 11.1999 15.4062C13.5289 15.4062 15.4089 13.5273 15.4089 11.1998C15.4089 10.7532 15.3397 10.3231 15.2113 9.91958C15.0504 9.41375 14.7729 9.00045 14.4821 8.56276C13.7114 7.60513 12.5287 6.9935 11.1999 6.9935C8.87085 6.9935 6.9908 8.87233 6.9908 11.1998Z  M15.2113 9.91958L11.6743 13.3664L10.4571 12.0759L8.14615 14.0981C7.83051 13.6987 7.52626 13.3216 7.32518 12.849L10.5555 10.0224L11.7188 11.2556L14.4821 8.56276C14.7729 9.00045 15.0504 9.41375 15.2113 9.91958Z',
};

export const loggingQualification: IconData = {
  name: 'loggingQualification',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M11.5014 4.17649C11.7919 3.94117 12.2075 3.94117 12.4981 4.17649L13.9996 5.39254L15.672 6.69748C15.8903 6.86784 16.0172 7.12985 16.0156 7.40678L15.9995 10.1624L16.017 16.595C16.0178 16.8709 15.8909 17.1317 15.6733 17.3015L13.9996 18.6075L12.4981 19.8235C12.2075 20.0588 11.7919 20.0588 11.5014 19.8235L9.99982 18.6075L8.32609 17.3015C8.10853 17.1317 7.98167 16.8709 7.98243 16.595L7.99991 10.1624L7.9838 7.40678C7.98218 7.12985 8.10913 6.86784 8.32746 6.69748L9.99982 5.39254L11.5014 4.17649Z',
};

export const orca: IconData = {
  name: 'depthConversion',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M11.5909 14.6585C11.8317 14.8457 12.1689 14.8456 12.4096 14.6582L16.907 11.1568L17.3212 10.8361C17.6653 10.5696 17.6659 10.05 17.3223 9.78279L12.4096 5.96184C12.1689 5.7746 11.8318 5.7746 11.591 5.96184L6.67633 9.7844C6.33335 10.0512 6.33313 10.5695 6.67588 10.8365L7.087 11.1568L11.5909 14.6585ZM13.3246 8.36268L12 7.33119L10.5907 8.42867L12.0028 9.46418L13.3246 8.36268ZM14.4012 9.2011L13.1106 10.2766L14.5323 11.3192L15.8267 10.3112L14.4012 9.2011ZM12.0552 11.1561L13.4388 12.1707L12 13.2912L10.7041 12.282L12.0552 11.1561ZM8.17335 10.3112L9.62748 11.4436L10.9474 10.3437L9.49724 9.28021L8.17335 10.3112Z  M11.9936 16.8245L7.48733 13.321C7.24787 13.1348 6.91263 13.1348 6.67321 13.321C6.33188 13.5865 6.33188 14.1024 6.67321 14.3679L11.3863 18.0336C11.7474 18.3145 12.2531 18.3145 12.6142 18.0336L17.3232 14.3711C17.6667 14.1039 17.6669 13.5848 17.3236 13.3173C17.0825 13.1294 16.7446 13.1293 16.5033 13.3169L11.9936 16.8245Z',
};

export const fallback: IconData = {
  name: 'equinor-fallback',
  prefix: 'amplify',
  height: '24',
  width: '24',
  svgPathData:
    'M6.12478 6.82667L6.12491 11.661C6.12478 11.8043 6.19663 11.9366 6.32074 12.0081L10.5097 14.4214C10.6874 14.5238 10.914 14.3955 10.9141 14.1904V9.35619C10.9143 9.21289 10.8379 9.08051 10.7136 9.00893L6.52484 6.59578C6.347 6.4934 6.12504 6.62164 6.12478 6.82667ZM19.027 3.05178L12.9963 6.52619C12.8177 6.62911 12.7075 6.8196 12.7078 7.02583V13.9857C12.7081 14.2811 13.0343 14.4656 13.2901 14.3182L19.321 10.844C19.4996 10.741 19.6029 10.5505 19.6026 10.3443L19.6028 3.38438C19.6025 3.08897 19.283 2.90447 19.027 3.05178ZM10.7542 17.8545L9.07822 18.8201C9.02863 18.8488 8.99797 18.9017 8.99797 18.9591L8.99784 20.8931C8.99784 20.9753 9.08875 21.0265 9.15981 20.9856L10.8358 20.0201C10.8855 19.9915 10.9143 19.9385 10.9141 19.8813V17.947C10.9141 17.865 10.8252 17.8137 10.7542 17.8545ZM9.77743 16.0699L7.2675 14.6175C7.19311 14.5745 7.10139 14.5745 7.02701 14.6175L4.51708 16.0699C4.41057 16.1315 4.41057 16.2852 4.51708 16.3469L7.02701 17.799C7.10139 17.8422 7.19311 17.8422 7.2675 17.799L9.77743 16.3469C9.88394 16.2852 9.88394 16.1315 9.77743 16.0699ZM13.8181 16.3317L14.9334 16.9769C14.9994 17.0152 15.0808 17.0152 15.1469 16.9769L16.2621 16.3317C16.3567 16.2768 16.3567 16.1401 16.2621 16.0853L15.1469 15.4401C15.0808 15.4019 14.9994 15.4019 14.9334 15.4401L13.8181 16.0853C13.7235 16.1401 13.7235 16.2768 13.8181 16.3317ZM12.9211 17.8846L14.0374 18.5277C14.1035 18.5658 14.1443 18.6364 14.1443 18.7128L14.143 20.0011C14.1429 20.1104 14.0245 20.1788 13.9297 20.1243L12.8134 19.4812C12.7473 19.4431 12.7079 19.3722 12.7079 19.2961L12.7078 18.0078C12.7078 17.8986 12.8263 17.8299 12.9211 17.8846Z',
};

export const bravos: IconDataWithColor[] = [
  {
    name: 'bravos1',
    prefix: 'bravos',
    height: '24',
    width: '24',
    color: '#99C6C9',
    svgPathData:
      'M15.6121 11.9889C15.6121 11.472 15.2603 11.0214 14.7588 10.8961L10.2339 9.76484C8.30708 9.28313 6.95533 7.55184 6.95533 5.56568V5.49634H8.39813V5.56568C8.39813 6.88979 9.2993 8.04398 10.5839 8.36512L15.1088 9.49635C16.2525 9.78229 17.0549 10.81 17.0549 11.9889C17.0549 13.1679 16.2525 14.1956 15.1088 14.4815L10.5839 15.6128C9.2993 15.9339 8.39813 17.0881 8.39813 18.4122V18.4815H6.95533V18.4122C6.95533 16.426 8.30708 14.6947 10.2339 14.213L14.7588 13.0818C15.2603 12.9564 15.6121 12.5059 15.6121 11.9889Z',
  },
  {
    name: 'bravos2',
    prefix: 'bravos',
    height: '24',
    width: '24',
    color: '#CCE2E4',
    svgPathData:
      'M12.7266 11.9889C12.7266 11.4218 12.3748 10.9141 11.8438 10.715L9.76403 9.93509C8.07464 9.30157 6.95543 7.68655 6.95543 5.88228V5.49634H8.39823V5.88228C8.39823 7.08513 9.14437 8.16181 10.2706 8.58416L12.3504 9.36407C13.4446 9.77438 14.1694 10.8204 14.1694 11.9889C14.1694 13.1575 13.4446 14.2035 12.3504 14.6138L10.2706 15.3937C9.14437 15.8161 8.39823 16.8927 8.39823 18.0956V18.4815H6.95543V18.0956C6.95543 16.2913 8.07464 14.6763 9.76403 14.0428L11.8438 13.2629C12.3748 13.0637 12.7266 12.5561 12.7266 11.9889Z',
  },
  {
    name: 'bravos3',
    prefix: 'bravos',
    height: '24',
    width: '24',
    color: 'white',
    svgPathData:
      'M9.84089 11.9889C9.84089 11.3077 9.52017 10.6663 8.97521 10.2576L8.68665 10.0412C7.59674 9.22372 6.95529 7.94083 6.95529 6.57844V5.49634H8.39809V6.57844C8.39809 7.4867 8.82572 8.34196 9.55233 8.88692L9.84089 9.10334C10.7492 9.78453 11.2837 10.8536 11.2837 11.9889C11.2837 13.1243 10.7492 14.1933 9.84089 14.8745L9.55233 15.091C8.82572 15.6359 8.39809 16.4912 8.39809 17.3994V18.4815H6.95529V17.3994C6.95529 16.037 7.59674 14.7542 8.68665 13.9367L8.97521 13.7203C9.52017 13.3116 9.84089 12.6701 9.84089 11.9889Z',
  },
];
