import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import HeadMeta from "../../components/common/HeadMeta";
import SmallLogo from "../../components/common/SmallLogo";

const Personal: NextPage = () => {
  return (
    <div>
      <HeadMeta
        title="Alardin 개인정보처리방침"
        url="https://www.alard.in/terms/personal"
      />
      <div className="m-4 whitespace-pre-line relative overflow-hidden">
        <div className="fixed top-0 -right-20 opacity-10 transform -rotate-12">
          <SmallLogo width={360} height={360} />
        </div>
        <div className=" border-b-2 pb-4">
          <h1 className="py-4 font-bold text-3xl">개인정보처리방침</h1>
          <span>2022.11.01 기준</span>
        </div>
        <div className="py-4">
          <p className="my-6">
            안녕하세요 Alardin의 소중한 이용자님, 만나서 반갑습니다! 저희가
            준비한 개인정보처리방침을 읽어주시면 감사드리겠습니다.
          </p>
          <p className="my-6">
            Alardin팀(이하 &quot;알라딘팀&quot;)는 「개인정보 보호법」 제30조에
            따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
            원활하게 처리할 수 있도록 하기 위해 다음과 같은 개인정보처리방침에
            따라 처리하고 있습니다. 회사가 개인정보처리방침을 개정하는 경우에는
            홈페이지 또는 Alardin앱에 게시하거나 개별적으로 공지할 것입니다.
          </p>
        </div>
        <div className="">
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">
              제1조(개인정보의 처리 목적, 항목 및 보유 기간)
            </h2>
            <p>
              {`
                소셜 로그인에 대한 정보

                - 처리 목적 : 현재 트래픽 측정 및 서비스 개선을 위한 목적 
                - 처리 항목 : 이름(닉네임), 이메일(소셜 이메일), 프로필 사진 
                - 선택 항목 : 생일, 성별, 나이대 
                - 보유 기간 : 회원 탈퇴 시 까지 

                디바이스 접속 이력 

                - 처리 목적 : 현재 트래픽 측정 및
                서비스 개선을 위한 목적 
                - 처리 항목 : 기종명, 시간 
                - 보유 기간 : 회원 탈퇴 시 까지 
                
                고객문의에 대한 정보 

                - 처리 목적 : 서비스 개선 목적 및 상담 답변 진행을 위한 목적 
                - 처리 항목 : 이메일 
                - 보유 기간 : 1년
                `}
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">
              제2조(개인정보의 제3자 제공)
            </h2>
            <p>
              {`
                회사는 이용자가 서비스 이용과정 등에서 따로 동의하는 경우나 법령에 규정된 경우를 제외하고는 이용자 개인정보를 위에서 말씀 드린 목적 범위를 초과하여 이용하거나 제3자에게 제공 또는 위탁하지 않습니다.
                (1) 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 
                (2) 제1항에 따른 권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다. 
                (3) 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다. 
                (4) 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다. 
                (5) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. 
                (6) 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                `}
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">
              제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)
            </h2>
            <p>
              회사는 이용자가 서비스 이용과정 등에서 따로 동의하는 경우나 법령에
              규정된 경우를 제외하고는 이용자 개인정보를 위에서 말씀 드린 목적
              범위를 초과하여 이용하거나 제3자에게 제공 또는 위탁하지 않습니다.
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">제4조(개인정보의 파기)</h2>
            <p>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
              달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속
              보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">
              제5조(개인정보 보호책임자)
            </h2>
            <p>
              {`
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다. 
                이름 : 조병근 
                연락처 : airmancho@gmail.com
                `}
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">제6조(권익침해 구제방법)</h2>
            <p>
              정보주체는 개인정보침해로 인한 구제를 받기 위하여
              개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
              분쟁해결이나 상담 등을 신청할 수 있습니다. * 아래의 기관은
              회사와는 별개의 기관이며, 회사의 자체적인 처리에 만족하지
              못하시거나 다른 도움이 필요하실 경우 문의하여 주시기 바랍니다. *
              개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr) *
              개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr) *
              대검찰청 : (국번없이) 1301 (www.spo.go.kr) * 경찰청 : (국번없이)
              182 (ecrm.cyber.go.kr)
            </p>
          </div>
          <div className="my-6">
            <h2 className="py-4 font-bold text-xl">제7조(시행일)</h2>
            <p>이 개인정보처리방침은 2022년 11월 1일부터 적용됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
