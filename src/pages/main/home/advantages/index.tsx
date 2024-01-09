import React from 'react';
import {AdvantageBlock, AdvantageCard, AdvantageContent} from "./style";

const Advantages = () => {
    return (
        <AdvantageBlock>
            <h2>Причины обратиться именно к нам!</h2>
            <AdvantageContent>
                <AdvantageCard>
                    <h4>Качество!</h4>
                    <p>Делаем все аккуратно и <br/>"по-красоте".
                        Обязательно пользуемся лайзерными уровнями и только хорошим инструментом.
                        Качество - это наша визитная карточка,
                        большенство клиентов - это те, кто порекомендовали другие заказчики.</p>
                </AdvantageCard>
                <AdvantageCard>
                    <h4>Надежность!</h4>
                    <p>
                        Надежность - это одно из важнейших в электромонтаже!
                        Очень важно, чтобы все было сделано правильно и к этому мы подходим с особой внимательностью.
                        Перепроверяем несколько раз свою работу и делаем так, чтобы клиенты не волновались за свою
                        безопасность!
                    </p>
                </AdvantageCard>
                <AdvantageCard>
                    <h4>Гарантия!</h4>
                    <p>
                        Наша работа всегда облагается гарантией, не важно усная она или письменная.
                        По просьбе клиента составляем договор на оказания услуг с 10 летней гарантией!
                    </p>
                </AdvantageCard>
                <AdvantageCard>
                    <h4>Профессионализм!</h4>
                    <p>У нас работают только лучшие, проверенные монтажники, профессионалы своего дела!
                        За каждым работником мы следим, чтобы работа была выполненная со всеми требованиями клиента.
                    </p>
                </AdvantageCard>
                <AdvantageCard>
                    <h4>Опыт работы!</h4>
                    <p>Опыт в работе более 10 лет!
                        Очень много "не стандатного" приходилось делать, сталкивались с разными трудностями, но все
                        решались!
                        Не бежим от проблем и сложных задачь, поможем, подскажем как лучше и выгоднее сделать ту или
                        иную работу.
                    </p>
                </AdvantageCard>
                <AdvantageCard>
                    <h4>Довольные клиенты!</h4>
                    <p>
                        Сотни довольных клиентов, стараемся для всех и для каждого.
                        Каждый клиент важен, делаем так,
                        чтобы он остался доволен и обратился к нам с другой проблемой либо посоветовал другим людям.
                    </p>
                </AdvantageCard>
            </AdvantageContent>
        </AdvantageBlock>
    );
};

export default Advantages;