import React from "react";
import { Tooltip } from "antd";
import { BsFillLockFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";
import numeral from "numeral";
import { useHistory } from "react-router-dom";

const CartRight = () => {
  const cart = useSelector(selectCart);

  const history = useHistory();

  const getSubTotal = () => {
    let subTotal = cart.reduce((t, item) => t + item.count * item.price, 0);
    return subTotal;
  };

  const getTax = () => {
    let subTotal = getSubTotal();

    let tax = ((subTotal * 18) / 100).toFixed(2);
    return tax;
  };

  const getTotal = () => {
    let subtotal = getSubTotal();
    let tax = getTax();

    let total = +subtotal + +tax;
    return total;
  };

  return (
    <div className="cart_right">
      {/* title */}
      <div className="cart_right_title">Order Summary</div>

      {/* content */}
      <div className="cart_right_content">
        <div className="cart_right_content_top">
          <p>SubTotal</p>
          <p>{`₹${numeral(getSubTotal()).format("0,0.00")}`}</p>
        </div>
        <div className="cart_right_content_bottom">
          <p>
            Taxes
            <Tooltip
              color="rgba(0,0,0,0.9)"
              placement="top"
              title="Your final taxes will be shown in Checkout."
            >
              <span className="cart_right_content_bottom_que">?</span>
            </Tooltip>
          </p>
          <p>{`₹${numeral(getTax()).format("0,0.00")}`}</p>
        </div>
      </div>

      {/* three */}
      <div className="cart_right_three">
        {/* top */}
        <div className="cart_right_three_top">
          <p>Total</p>
          <p>{`₹${numeral(getTotal()).format("0,0.00")}`}</p>
        </div>

        {/* mid */}
        <div className="cart_right_three_mid">No refunds are issued</div>

        {/* bottom */}
        <div
          className="cart_right_three_bottom"
          onClick={() => history.push("/checkout")}
        >
          <BsFillLockFill />
          <span> Checkout</span>
        </div>

        {/* mobile--bottom */}
        <div className="cart_left_five_mobile">
          <div className="cart_left_five_mobile_img">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABgCAMAAABi8upBAAAC/VBMVEUAAADf4N+R0k2635mV0WGa1Wal03xhsxC8352bz2yl1Hue0W/j5ONltRabzm1yuyqKx1Ck03qIx03h4uFmthiGxkp7wDmJx06QzFhotxyPyleGxknm5+aj03ag03Vyuynp6enP4b3U6Lqe0HCl03zj5OOQy1q03Y+l1Hucz2zg4uBsuCGj1Hh0vC6GxUqw2oxvuid6vzfk5OTg4eC33pa23ZTr7Ovg4OCWy2Pg4eDn6Oeo14Bhsw/n6OeCw0R6vzff4d/n6efr7Ovf4d+t24bp6en///+Li4vf4N+a0Wru7u6c0m3x8fGFxEmQyVuIxU6Syl2435eGxEuZzWnB46X9/v2/4qKXzGW94Z+np6efn5+Tyl+74Jy535mPyFmOyFeYzWeDw0Zzuyyx3I2v24l7vznD5Kiw24u33paOjo6LxlN1vDBxuipvuSaf03KCwkW64Jpothyn136e03Cdz2+KxlF+wD2p2ICUy2B/wT9rtx+vr6+bm5vo6eiAwUFtuCSZmZmWlpaVlZWt2oai1XagoKCNjY2l1nvA46O+4qC13ZP8/Py23pSazmuNx1Zwuij6+vr39/fC5Kaj1Xee0HGWy2SJxlCBwkN3vTObzmySkpJ8vzt0vC7MzMy84Z203ZGh1HSg1HPX19ez3JCVy2Lq6uqRkZGh0XbBwcF5vjadnZ2g0HOsrKylpaWk1nmHxU12vTJsuCKpqamq2IKd02/b29vT09OVy2OMx1RmtRmr2YOm13zj4+OMx1Wczm14vjXw+OmQkJCs2YTt7e3m5ubOzs6ioqL19fXz8/Ph4eG7u7uysrJtsyre3t7JycnCwsK+vr65ubm23pPV1dWj0niz3Y+cz25msB/5+fnQ0NC0tLSrq6txti9ssyjF5aqt2Yak0npltBdktBXExMS2trbZ7cdisxP0+u7l89jU68Dq9eC03ZBosiLP6bi84Z77/vl2uTfs7Ozf8M/K5rD5/Pbd3d26urrGxsaurq6WzWRvtiuYzmiEwEtstCWq04S1maYhAAAARnRSTlMA2AbzIxH+/vrOoVb35dzRzsarkGxrUzrv25iAf2lIRT4YDPDl4uLLjnpwXTjDvrCkjyLt6N3Sxr6smHvt6+jmysKxsXBdtQd7rwAAF5tJREFUeNrs2EtoE0Ecx/HRpiWmIohXK2qVqgiCDxC8CMqwiJSGTZO4TZqcQo5BcghowCdu1BSV5hDBvRjtwXoRNB5qLj4oiA9QgyCIh4oPsOBF8ObvPzv5JxsrInjbfHeyCSX08GH477RCbNixaWDTptWrQ1v2Da3bHugXvf5nqwcGBj6oXqOZmZlhZb1l69DgOnAH+jeKv7R8eX9g+7rBoYP7toR27BgZ2bO7ry/YN7JB9BL9jAtb6KJbqmkqjxqNxvDwKrRC1ccFg8HFeDRqRzKq9/r+XrdH9CJe0CKiZV1NS7jNZrVaLVfNsmmaadOcjqArkSuqTAYveu8Oxpmg6CUEdF1cLNB6cJvYuYQLXVU6nc5HOFYmYFxdyrtFL8xengpal2yn1VBoVpsNwi2bZdc2lo7lbTtia15WZmF1x6JGRC8hQktPBQwF8GIqANdk3Fglb0dtLPQH5wyWQg6JXkIMeWwZV9kCl6cC2WI1ojoQt5BJ2W4jY1GDopcQ238/K8AWuHoqMC5sK/VKo1QqRTlbvbSycrZZeaPohaPDjMe2STNXTQWeuHrnwrZeq1VLqihWZ555oZhzht/avP/A2vWiu1VdzzN9WDD5eUZVsHOBWyuU4/F4qRTHpZm90LaCBrCdPOSzHhZXroTxmp3CU2ha5U5c93HGtrxx6xWyLRQmwKsDcadytEs5I33Yhfmi8WzNBtHRVn6gwbbJIzfNhwXauPVaoVaYwGU6cVzOYnwxjqWUlbOGhrJ2/iL92aUbxq7OETGoRi5wq95DLk+F1salxtKJRMJBJOwA2I2d23v5q/Rrb+eMbYIL5Kkm4Va7cTEWPLhjY7GEzqFFymozw9k7NBzp38aLxhrBDecbipZwUQu3EnOnQq1li0ZHY4lcjoX1TSE73s2clX7ue8f+XQFd4mXdmMqdCjRxNS7pjv7M6RJ00WJmh9LMi0np64oGz99Qo30O48dZHadcPRUKsFW4aPJnEuW4hBLmiDihjCPS143P7drYOjrQWFC4ZvtxVueR28adxKqHk7qcuziGdmg3f5P+7rKxtnV04JGrcHnk8lQALeFOYk3WwigJ4zAr04uF9SvxWfq84kp9/A0s/RcEcDunAvmmUqlCOJzFpUu2yyllblz6vEut7bu8/T8bPojxzh1VUwEX2U6lUhMXsyiMRWX1XvZEyuel73u0TLitYlzs3Y5TLuKpkKKmph5MZOF7EZeqvZWTHufcden7Dhs7hWpvmkeua4vFtipt+2Dq/thFHRFzGllDk7Js9TF87qjzVVKfIqfPvPlCYyNz+vQnuVT3Zk+dOPYIH+Yt3T366ZGrJ449xIeHlvUSbwuWNS8PW+js0+eXvN/WGcdOnJq9K9FZ6wju1yzrGT3RH9++eXzhsES38fUnT59fwMdXFrrzoyjRrGWNyznLeuH+2gWJ5mZPnnpn/PN00GffX+zZ70tTURgHcIheBL2JIIqgXgb9BdU/8Dzhydav2++fbLTci4LCRmShrilphBYZGctSMhFlYFmxCmzZyrJfllEZ7UVJP0QsrYyI6HnOOfd0b/NaDl/2nZvDzpb7+Oy5zz2bSfvkehDjuGYFg8u610KXl5SVlXUdKusqO0QXIuY4lbW02dDZKji7eAfiw1HBCQ4ALBWiDUbII5SJASxCNPdfICevA+As4l4AWIO4CG6gSuFZ12qVGMrw3yIPi+i2AbGWdNeYp4JilGkk65soU3IfAAoQy+EeYnW5fFr+09xHGQIfU+xTt1mryJY3bdY5bDlMq3GpcEOXQ6HQYpItq+GbLmY+1CWB2dlFzJycd+R55YAQ20kzIsSZ8AUhXnnyLkTEomrEvLP8yuqjnItQy4b1dK1w8/KKghIpYFY/BpmcPMRi9mt1875GxAL1VMwbbaSH35W8RdFi8v1keHm55m2nRUVFiNgBY8rVBYp39iU95fIZxDppa2YFU7msmx/KX1xTQ7g1ZXSpYWMJzZWsmTW06gbSsResQ0L0kzQX7qAQBzx5mxBvgtWD2GAXDucu4n2oLES8+idvE8DtRsR2Xt0CjjyUhXuHVjt52a6kA541Iy5k3usAz1KIOcwboxaB+MbB+83mbeDfBx4g3hnjsW2enszMrKAK11SuKVxKKJRPId7uvu4aDgFrY6VMlWyUzeAQZkw2XQ/vWRqgVIi3XryFWG8B1JKbkzeKeEO+yJsZvOqd+ziDt4cXwD4qVRfvM8Qot3LE+5oXntPPNS8UYdTBW3JL/xIt8sluITaPcfLVo8ME1nXj6p57mHWpci+TLfNWVW2s66ZLXV1fXV93nVYuUwUtnQmakIOgs0uE6bYtEnkFQ0IMAsCRSMSTtwQLAfiY9cjJS/VZTuip1MWReGsRhzN41yJWyKNaj4uXn1Q9pMHm/YJ40eZNYaGDF2N6fRSxEqA8lbqbBS9njhtXym502HLlsq2vyrfR79fA3fytr4+ujKyddS0b3lJx2gKVfq5eFS/eIq5emUxezki8jxFfu3ntBSp/533uwZty8XKy5J3PuGZWcBVuyIXr823y63TX+es2vPv8tl9ak3FfXY0uZ7o6HI98Nke5naYle/beR5Vj5H1A5TdS7+1Z9E+8tY7mUMDNodHw4qdx4p2pbTXtRvtodi3EYVq2pcSXbfIH/XYOMZE1JCuZrtwwyJir+RQ4JoczK5Rqkqey3gFvXi4lvP6mXfMWPKd8GY23peJWazHd59WNvPqevS4PsWTvF81bTf/S48H7ArFd897gJzfVu4YWjRPvXOeujZ4V+HgmcatIl3g5y5bFDwf9dKHQN6X2QVlTMXMdK+YhsPN+u6AsfSs7sKCU9nrzQiwPKT05zKvSMwqvzp3fq5tAp7UaKal2yauSyVsy3NCC2AjM2zP8qJiXGN471Cp+87bKETlL3smOoxmHK9duuVXEy3UbJ1zK5SBHCg+CTJvfEcJl5l4webv1NKEmuENYvRJ40JOXnO7U82haOQbeBmsEXqh8wJNqdc5ovDL1V5lX5a7l4KUfXhwf3un2KQSVLdka3JBsCzJxqlzSzQ0FAsEgXQPBfrs+037mdhDX+V12A+8PmKPahy5qEJ68nIqb1bqbRq9Szo7G2xj7hngPJG9KrzaxaguJkXmLKysrH3rwcoFr3uqHFjh4K/NwjeG9Mfw6e96JuikcVk1X0+Yb3LiiXZabm5sfoDDxCgtU1i1PE68m5nt0C+708qmailUqLgyMwqtmgUf/emhrR3yheFtGeH2IzaMd2vJyFlUAKN6GnNsWgJMX9iI6B7PseScsll3BWbgSV9LGdeEyLvOqbPsMKkMvfySDOprYnwR3PghxEHT6vE8rHIb/ystnIuVevCzyt8nB5o2BTqPhbR0XXs4cLls+P7MHMdVwWdcncXMl7pbcLVWRSCASCJi3f9vHlzvOB7hdcOiWkzaNd+nSIV4kxGroXyoPcF3evLebmh7wttiIvK3NzY9H4L1DbJm8TU1vgJIFr6N6reLx4p2ySeLqWUEXrukKpKtxt+yoiqQjlHegYq3rfBlKBOwwMN8YXiEiajwbgtVC8KMCYhd48apXcJVem5N3LWPCfSbIUYwpxFuatwPxbiZvPV6vkOexLZ4nxX/nhYc4DifFnKluWzdurgzb0pcvEkmnI+9BZ1Jn58en6cAf6QI7pdL0oBDv+aztlAUfLojEKGdt2CFH0ZiTt4c1Koi0Q7qdpS0sEtO8FrXQipHO2m4CDBOS95bO33n3Kd6HZksnW96Zh3XL5RCuGcS4K2hcsqX4kpRXFqi8e9n50reT2oVsGSYrwc6QEBfCNDic/gxtZ4Q4GhYszby7OBFwpUHvF15Xg1kJJwbP9YZkQTnAV8Q83oR8aPPCG8THztUyF/kh/N4+6+Z9oP+Domf/wgvRrDck3bzTHMOCxDWzgqlcxj1+/Hg8kUwuHQCVzz86v588l6R+QV9MrJH7wY7VrbbTe3l+2CU43QPMq5IER8xud8lN9wb5XjU3tfPYFkVOc7nhbaVvmdvpbzy201uQc/0q/BNvzLWd/hqy5Z2s20K+z1elhwWOu3BZd388kQi+BZ2f1Bo2h5ORSJIu6bRmTgcG4Xfedx84v1q16rZT4aNd/erDIJUN4I4Va64uuNvxx8c71vNUfeGLRWrFcKo+dd9SG2tfeTyIro1WOFbr1LYUF36rzfww6Lnjw6CUGQX1A50fBg0D9Vvnh0EdkDXv9PwQzwpValQwHdfgalvKssT5d0auk45rVxLJRJKjlLmK023wP07eiXpfwZyeZRbufubdsz833AtmJut8uf/A+QSHjSUzEyfgf1y8ExRuXA0Lpm4Zd/nOTbJwj5Ptnj17cl+BjnWMWsOJ8PnzEthWTtJ1J/yP5tWZYdqCwZXxUa2Wb+XipdKl7D4xADorqTUsLiVelQR/KeZS+B837xQ5h8Udc5iaFdSAO+jbI2337F7WBo6Z7MeTsIwyNsz/q/dP3l/s3FsIDFEYB3CJ8qCI8OBBKa/KqweenM9lkYfBelCUGNdCLu3SzGaHWjKLXAa51E5su2izPFixWbtrXXZFYdkopLRyv1/yfWfOOWasW0op/ntxG2fHb7795uzMrKGHvcIN9txtWzXRZlcgLmblM/ZlTnZh59LFi4WvUBbQ7H+CvH0CkwU1D5uRkJpXEXfnsufMPydbsZZ0F+MtILx8NpPRosBnPFUdVrFfyk3Is59E/7WTB5WIC6lftrAB/iDvQF/ZKlzcnT1SUHOQ9zbzz8kmrlnMg8IYVJbQk/wHF6MaP/d1nv0O72gI/zZvE3TjzF/C20/gyq5AuJSJp5nMo/FbHvvmZBeWLVy7ePGJE4tVCJcrbwqcEr+ChVS0zvw27+8mCiXG/hLe/v7S9Wy30Vxh59YXrDPa8daFJ1M2n+BZjDe8+5Sx5FXykKZPpJcZ5ttFl/T9VPEm7QCvVtE6QQK/p1Vt5uW6GNCEkLec/IOOkWxNvbDgVWMFV+57K5/wlqv8lHeAtzeTuGIehrytDRrryNRW69bJNWtFTqyVzOL+jPmShf0VVw8xu2aCcx5XMgQxQgCLjrxEDrgQTYktYYBzN4e8WsMEMOsanTnmlz5ldYDsuUBzuBIF0CMESAlFLID0fvrwawC4dDbfAUyKlbIA8ZfqX0wjhQu8to/FwWoSmtZwILpf8aZyAFB+SWyXixC7m6B9R9MFE0fdzevkCrW6CFzKWZDRrtdciB2wf8zbTeBu41NciYvt9l17NlNRc7LWu0VbDh1ae0j60m2tUn7IfDkH8To0qCyBLprTgrwAMSujMUoJwEIT5N1vueWyBXU2tgnG3RDLgZE1wA35eC/iUHEdwmoPamZjdOXfKkePI+Ebxi65ULtbOaNDOg2y4WhhHMnkI9HWiakrJVwdJG/SxGUcvkwWYmWdKJOGWPkAL1gxOIsr55SLkPkxb/cZZIu4q3m4LWXn9lZbfU5TczJsDe83H6IQMD0oivgx8ycHlltheYilWCgKZ4O81kUWsuXFp+XrbD+nKIWoL6Rlc9BI5w3cYF4s5L1MW8y+VGFiy8RsXJgWC63Ch2UlRHO4SYfCboDBMHKkm3CMeHPXafNWqM7rWuKe5H3Jd8b7R9PahW0WcqDEXkG2wqrnVwWrN11lKZanta6a8PL7vBTVFRQu1925c97H1n0WyB1sDRP2HtqMOXRoMzfmD+m8mcnIqqxT+z3Aj/w1g7w5/2agOVxaVloFipKXpw51X/XW4OaqpO/snJv3d2KS5U+2pWuMACuBo8p3ifcco+cCSwI1mzOSdzSYF72xztOqIO1uFhXTyiDvbq8ojokhf8g7QnVcikdLurMO3mrfCrzbn6PuhyVrEJd8iVgwS+J9LBgDUrQaZ/mOLhPkPe9v0qM5cp4la2nHcb/wnsuZjqMHeFNFAHBzq9SmwaTx35u4G3ccByRvCMDBgOQZHaaRPN4UvSYiV8H1zxwSZcDEES0LrkNLH0iApX2D94o30ynyhS7/mLe31FVtgWwpp261Vz9gKg+ftC7s3LCGspnuApn/4DEv7JghPeVF8Mu8YYhlIhnFW7IgHolEA7xsbCOc1sG05XHiSJlfZFND80hE/8KrR3hC8o1EIwV5K1D08VLLycQdwD/IQjZCOaZZ8F3ejFjo7I95h0pbRYu4lIMHt7+7Nj3BRB7PbbWerNi7dw3epbFQPiTu3+StQ40f97+H1WIhytMO3hyvbwPyITA0xqqKtwGX6P0X5NUIwoCC4PXaR5M5epWageRN6PhaMnKkRoCXYKtowXnVWJexlzVBHmNPy9c5611S7OOtyfMcP+bts3I12crKRVupe/DUkY/tO+rDMLaGuUf37V2zby/PGu+mlDF7v8VbwPZonzNpnRy4l6xmOngbEE0lLwHkq+COxT8j3nOQTiBsU2N2NsD7Kl7QWCqGRpSCuTvJkk1osBiMpiKVvEjUtFmqWZUvcQ9HKgd5mQHNaigjefPmseuskoHXLA/GGXa9kacNN61kl7IXcX3gil0yfbznwFzF7Pp+mi1Xvs87TNju/Nr24KlT23e1r/UQH92u4Zxsxz4M8u7bu2+NIMYfVS0f6uRVZ7/UqSu9gxfnUBgL8uwNWEYMiLfiAhSwz7qGDn7eahZHcNQ1ZZd0PnFyUgjBzzoq3kqMz7+a4h+seyMFeXd7rwtyE/CxzBDt28DEe4Ul4t7Ka1qWr7vi5XUOMQtiIaz/dMfF/yoDV3YWLuki7vbtR2a2rz1nmGcXrl148nYhBn3xsZeU8QmlBTQqL2bBZI2xvG+FnWzdZpgbaSdXMgyc/hg1/9a+6cRvNI3RzG5Ei9NuGFEqjrBRYqWcE4scMC7JzWVcxy3zxnDju+U7/+nleNG495SacLoYvVQ2EIc/sVDTcLPq/VvIOWakYeCvw/x4xBujROtTdnIFw5AqzWnF6Cv6u4lLcTd9ucL4HtMN0xm+ZM00Lh8zXiGrkRdtHxe6V2UsZeQ6vrqi0k9VrqKlyt1OuNuPzHvXvvbp9IPJrWvXbk0Yt1CEgOkJ4xF7wrfZ/4gvXqn0R1w1W1CFy3WPzMOgL0/78JglC/EKBXz6giyt93LpPex/xNcGVQZh6c6SfUHgki3iIu+uXTM/er6t90eXiKAwEdODhHkpUyax/xFfelUZ4OsLp1TlUuEiLvLumv+RF+88vOzmKD1QWUCjMNWyyr/9/7yolIYgq0y3bxYuhWxnYuZ/bLc/btw+jsKJSRgfXFq2C8Jez/6HekNfH29XbtuJu0vgku/8jQs2HhkXyFFEpmAlS+X/1av+uwxfdhIt6ZIt6qqu4NEiLvJu3HhkjJQNKo8jYc/5f+/FJEcP7+LPSOINFi7t0XYJW8LFLDgyZsyYcXTDuz+qZyzB77f+j1boOTjA24tsT3m2XukKXLSdKWwXbFwwb4yIZO7MOvY/q0aP6hLI5/buWCdhKArA8A3RsGggRBCQBGOiC8HAwqSDDk11d3JjlqGJg7kJuQ/ggImLAysP0LEJm4t9A9c2kdWoE2HxnsuhsZXSojD1/OEJvpycHrq0PtsKyvbHVgBb+QPdjkBefwHlLy3xfcBq8NXAtQBLQW0FnFuFi7ZCiP6MNJz5U0t4V139jAVqwn9fpQu1VVNdaYsJYbYvopq8a8nudaifs2AFtRRwcH3PM6SVtsKMwTvWEt3DQLcr7Fepp9mxoFK0iIu6EpfH4H3Uktv9S9e2W/tsTs0+hLQ4tz2khUzQ5TeRu+HtMpk9D7pDWx8eIm6wVAZxURdvBR8uj+a91ROaPdw6bVUOWFibDW9wIZxb3ArSFjKieLMpRoVUrUvgHg7uTNeEENcwegtxi3lGLQRGW290lS3iRvDe7TEqCjgTwOUeLtQJP8jKtBfiVMhMH2gmhLbciOCd5OgzkPGBhcw/uJBlWSG82Q1Gxa+WMTnm2arEPNyjXUYtCVzybQVrmjOHt1hg1NKlaqUAruNYjhnEvaZz4R/AkKIFXccN8o7LjPo78M62wkVb13U5nQsrBkZdaTtyR5zOhZUDS1qlK+N0LqwBWNIiL71dYGsCHqVHaYPeLkBrAE5DwDvO0duF1QNXG6WTdKl4nCfcuH0DgJt8gXE6RiEAAAAASUVORK5CYII="
              alt="secure"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRight;
