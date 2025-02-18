<script setup>
import { onMounted, ref } from "vue";
import { getUserInfo } from "../api/index.js";
const avatar = ref();
const username = ref();
const stage_text = ref();
onMounted(() => {
  getUserInfo().then((res) => {
    console.log(res);

    avatar.value = res.avatar;
    username.value = res.username;
    stage_text.value = res.stage_text;
  });
});
</script>
<template>
  <div
    style="
      padding: 3rem 0;
      display: grid;
      grid-template-columns: 1fr 3fr;
      background: white;
    "
  >
    <div>
      <img
        style="height: 5rem; display: block; margin: 0 auto; border-radius: 50%"
        :src="avatar"
        alt=""
      />
    </div>
    <div>
      <div style="padding-top: 0.5rem; font-size: 1.8rem">
        {{ username }}
      </div>
      <div style="margin-top: 0.5rem; font-size: 1.2rem; color: #8a8a8a">
        {{ stage_text }}
      </div>
    </div>
  </div>
  <div style="background: white; margin-top: 1rem; padding: 1rem">
    <div
      style="padding: 1rem; display: grid; grid-template-columns: 2fr 11fr 1fr"
    >
      <div>
        <img
          style="height: 2rem"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABPxJREFUaAXdWt1rHFUUP3d2kja2ttFEBbVINpW13UDfigqisVoWrCKU9in9+At8Kih96pPogy8RhL7ZNg+S4ItWCKWSoojgi63sRoMmKk0MtVrTbtN87cz1/GY7w+zXzN2ZO9vdHFj2zv34nfOb+33OCNIoJ6cvPWvJ9WEpxT4imRGS0iRohyR6GGoEUZEk3ZGC5vhpRgh5LSW6pz7de/BXXWawjngykp/cJ2TpGAlxVEq5KwqaEOI6STkuhXlhbCh3LQqG2yYyoeOFyf22LH3Ib/wVF0zLv6ArhjDfPZ/N/RAFr2lCI4XJ3dwj70tJR6IoVG0jBE1wj50ey+Z+U22DesqEzsgpcza//AE3eUeS7GpGSdS6gsQGz8XRwaFt750RwyUVHCVCx3++3CettQmeI8MqoLrr8BybEqktR87vee3fMOxQQicKk1nLLn3BQOkwsITL51KG+da5bK4QpMcIKhyZ/up1nvjfc50HTQZmpmELbAqyuWEPoWcAwJPf2UOCQFpZxotFkVfBFxr1VF1CmDN2aRXLZjv0TL33NWeYW/fXm1M1Qw6rGRaANiYDgmnYCFur2dZkYGnmo0roapbivj/8eIZe6n2Keru2VuNGel7aWKVvlxbo879nyOKxHiRYccvbCJ3y16sYcs6maVvTKvvM0SeeozcfG/RjaUt/eXOWxm/8EoqHfUoaqb3+zbdiyDknAMVNEz2TlKhi48XDZr8dHiGczZo5zugaZn5j3HQz2LAZtrttPULOQdPN7bB/v+0OIVwBtJ+aW/lS+MTvcGCdDiHnPtNKAxLQ5XIoDzm+nCWgo7WQ9zkYuDZHvWmGWbxuW7TGv1YIOICLCR9AEgoX1oo0tjjtEHr5kV28AT9NBm/GSQq4GGWHhn41P929ScvWBpWkTV/f+pPOLlylxfVl/Yp8iODCc0hmfHnakhu2XYG1uLZMZ+ev0mUmB5LJiMwYjqspGfQaVJt3wW/+u06fzP9It/jcplvAxYDfTDdwGN4/6yv03dJ8WLXmy5mL4ToBm28dr8VAT288gDqtwaXm+lCnntasHsOkXH+ahrb3a8V1wUxeSIvMrM/NSPJ/z7Y+OtQ/yK+xOxE14GLC18zo2gntNLd4Rm9PddMb3CvZhHrFU8RcTMdxLmnAy9SUeJHvSxYvz+xTo+d3PEk9qeRHN7iwFjHDe9EBTTw8mC5h0KuPPuM9tyYhZvg0ImN5+1tjqJoWcDEQn1Gr3v61wMVAsMmJz7S/vYEWggO4lO9DHGwKrN0Jhfc5OIQQOesEm4NsdDk4aynCgCP5i1fi+BV4c6Zzf+VpbmUpSG8yZRz1c0OZ5SHHahAGjKNthe8+f6zejgMRua3f9oor5LH8xXFV39zHmQM1LuDfV26XSaG7Ysg9fjmfKXhOoYL37YkLQ4c8n0jF9o2YppDW2yquYPigq13BAz07Cb+4AlewijiuYJE67a/rDTlkln3EctRfoVEaDnUohoNdlwALmMBWEznq92ujTcWQQwZCFLOFe5ceVDwVNqgI4q6D2YcOVgeTawgBbFMFvEAIkTEEaHnCFfHcTgKbYFu96B3srJhDfsMRw5SGONxOpGALbGoUX4X9dYecn1inhfVDCYFcJ3140XDI+XsJ4xUrCrP/qPy5ir80uTR0QSd0N5oz1dqVesjfaNN8vOQnhfSm+bysmtim+QCwmhie2+ETzf8Bptog4wZEL4kAAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div style="font-size: 1.2rem; line-height: 2rem">我的绘本</div>
      <div style="padding-top: 0.5rem">
        <svg
          t="1739108529816"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5005"
          width="16"
          height="16"
        >
          <path
            d="M60.452771 925.077283c5.395785-20.683841 18.685402-38.070258 37.370804-48.861826l631.406714-364.115535L96.924278 147.484778l-0.199844-0.099922c-18.08587-11.191257-30.775956-28.577674-35.672131-48.961749-4.996097-20.483997-1.598751-41.667447 9.592506-59.653396C92.527713 2.697892 138.991413-9.692428 176.262295 10.491803h0.099922l749.91413 432.462139c25.180328 14.688525 40.068696 40.468384 39.76893 68.946136 0.299766 28.477752-14.588603 54.257611-39.868852 68.946136L176.562061 1013.208431c-11.89071 7.094457-25.480094 10.791569-39.169399 10.791569-6.594848 0-13.189696-0.899297-19.684621-2.498048-20.683841-5.395785-38.070258-18.58548-48.961749-37.270883-10.691647-17.886027-13.589383-38.969555-8.293521-59.153786z"
            p-id="5006"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
    </div>
    <div
      style="padding: 1rem; display: grid; grid-template-columns: 2fr 11fr 1fr"
    >
      <div>
        <img
          style="height: 2rem"
          src="	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABNBJREFUaAXdWstqFEEUvdVmMCBxE1y4cKFJVBIk4iM+UDALt26C7vwDUTABxQ8QhURQ/AN3BjduXUxAUBGDZmF8C6KuRIQMgiGa9pzq6pl+TE/XzNQ8MgVNV3fduvecrqpbj9tKHCb/9u0RWVubhMpxUWqP+P4u5LfiGjBmSrivoOwzyt4hvySFQlFduvTBlDd9U81q8OfmxgHuPECew31HQ/qU+oq696HjnpqeXmpIh6nUMCH/1q0JWV+/CT2nmgFQpe6CeN4Vdfny8yplua/qJgQiw/ia13GdzdXejIBS82ixayD2sR411oT8YrFPFhdvwMhFkCnUY6RhWaXWYOuOHDx4VU1O/rXRY0XIv3t3UFZX56F80kapcxmlirJ581l14cLPPN25hNDFxkDkIS56rM4lekalzqALvq4FoiYhf3b2NCo/wBW63Vq62lFGtz+lZmYeZRnLJKRbZn39KSp2C5mQQwle8FhWS3mhVPSuxwy7WfeRIcwBDgGNMQra5FOEtDcLHEBnx0wVsOVXHM/AqLGWXwaZFCHtmjvlzRLgaj4SI6eRRIqNITNpLqNJ2zPPJMDU/ch5SqnR6OTbF1MSrADsyAwOioyOivT3x1Q0/fDnj8jyssjP3ClHzIe/DpvnQrvlLofWmYCA/XKmFWSIih+Ium0TMGvsRr5MyCw0bdW4b5mo5XpbPVgkaw2akN4CuF81RyG2On/KcJCghbif2ejJcAicQrA5y6fkgf/RoyJ792Ifyo1oC9MO7BXfvhV59kwwHPINkYPIjDLb5vf5NSBx/LhgKR+IbtpkVaVhoX//gqqLiyJPntipKRR2e+YMwK4CW6bdqR6bOM/gGBq3xrhli7WoM8H6bI57mGn3ODPeaUXg4mEy3dVpHM7sgwu9XGPuip6HXq+Z9A5Hc2/eiAwNiezbV9Fk49Uq0tHcVhJqbAPn+yKhJ4qqtMmz7suXIu+Nc/2Ig516ljvZNgbii9NsQXclf3F4w7nl27eKzrGxSr7JHPsM9+nu0o8fIq9e4cB3Ja1zdVWkWIyTOXAg6HJp6UbelNhCtIy9gKPEr//7twi70f79IsPDgeISvtvjx3GinKRHRhwZ1mpW+uC2eXC+05nWbdsCQuxaL16IfPoULJO+fxfhuzC5JyPkQrfNKIC7dPiwyPbtFX2/fol8+dJ6MrQILhxDTZ32V5CbHNd4J07ESUWFDh1y3c2i2pc8xmeib5zkSerkyTQpkgnHlBNDCSXg4ulgE+MzrhMnXZLaieHJ9djERGvJgAO5BPMQg00i06456ZXEkSPO1VZVGHAwO1ZEzqoKbaSXhoNejJkw4MJGwp/AuhCGMjUhXYgwYEIo/cgJs93JxmYEe5kQTh+fY2Kar4mXe/x2pzybwKyxG1xlQvoZMU2QWsvEzGUN9/g2Xy1TiWUBbdAWbWal4Cj4WrQ4drbNAgS5ZnFz7/GiVt3l5xD8momqi7cQSxCgRSu5n2yjVl3kiZFYEylFSEebEaAFqc8J2e55JDYGkatExlOEiFpHmxGgRRZr/q5LJXzsM1kR8aqESMHEMKeQ7SZSxDJlsBFmKqWcQlJCB497JawfkuupHy/KpHrp15iQFO8mDrvxf16KkjLEeuP3shSxXvkBMElMt1oX/KL5H+pHvGrltoQkAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div style="font-size: 1.2rem; line-height: 2rem">我的书单</div>
      <div style="padding-top: 0.5rem">
        <svg
          t="1739108529816"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5005"
          width="16"
          height="16"
        >
          <path
            d="M60.452771 925.077283c5.395785-20.683841 18.685402-38.070258 37.370804-48.861826l631.406714-364.115535L96.924278 147.484778l-0.199844-0.099922c-18.08587-11.191257-30.775956-28.577674-35.672131-48.961749-4.996097-20.483997-1.598751-41.667447 9.592506-59.653396C92.527713 2.697892 138.991413-9.692428 176.262295 10.491803h0.099922l749.91413 432.462139c25.180328 14.688525 40.068696 40.468384 39.76893 68.946136 0.299766 28.477752-14.588603 54.257611-39.868852 68.946136L176.562061 1013.208431c-11.89071 7.094457-25.480094 10.791569-39.169399 10.791569-6.594848 0-13.189696-0.899297-19.684621-2.498048-20.683841-5.395785-38.070258-18.58548-48.961749-37.270883-10.691647-17.886027-13.589383-38.969555-8.293521-59.153786z"
            p-id="5006"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
    </div>
    <div
      style="padding: 1rem; display: grid; grid-template-columns: 2fr 11fr 1fr"
    >
      <div>
        <img
          style="height: 2rem"
          src="	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABGZJREFUaAXdWs9LVFEUPvfODBFRLSIDoSBLhIJ0ZbVr1GxVEGG7/gAV3RQUrVxFQW0U9Q9ol4ugVpk57SpXGhRIZZDgwmiREhHjvNv5nt7xzcz7dd+817zmwvDm3nfuud93f5xz7z1PUIxpdFa1FyXllaJOVtshFLWRoAOc349mhKBNUrShBK1wdpnzSzmLCuP94hPex5FEvUpG5lVnyaIbyqLriuhoFH0MYlVIepKR9HiiRyxF0aHrRCY08kp1Fy16wD1+QSuL5SnodU7S7YlesRBFnzGhoYI6qYp0j0djIEqDYeswsBmRo7tTefE5bB3IhSY0VlDZ9RLdtxSN8qjkTBqJLCuoKAWNt2TozlhebIXRE4rQ8Jw6xERmeHHnwyiNW4aNR4GJDUz2iR9BugMJDc+r01aJnjGZtiBlSb5nUisyQ1cme8QHv3ak30semYulEr1pNBlgBAZgASY/zJ4jhJGBAl4vtg/xU/JP37Evy2TovNdIuRLaWTMLaRgZt86yp5+gbrc1VTPlYM12DEBD14wbEV2GjgZGYNVl+llTANPMFQKtWes+orOtRHtrNGjV4Z6/2Ri/WyNa+xVOXksBI7By/pYuw7NiysFpWlv0MYyfudpePxkNBKSeRtnNwU9l6ZTT+VZMOewAwpABkHpHRpOpSxc7eBuzQ1mZEPZmSW9nHO3G9heYgV0rLBOyN5q69D97OrHbawhHgOIWLZrwmPZ1byaadmV//iF6ywbi+ReiEne9ScplqQtHD3uEcJ4xqZyU7ME9RJeOE10+Yd6C5mATwuHMXEVyNc6xOzBNmoPEsZlHN9JJ07TRsPIYKdMEDuAicQdgWjmt8uAi2ePiQqMpErhgDXU0BZttEh1ZXDUZWkhX/tiPLa6bm9sMO46ulu19oatig0Jwkbg3M6jjKfr+uzkZKIO/Qd1YEnPBGorlAHfmMBF62zShDurGkcClzs3/LgwcJfBrdJJ8+ttsNIi42gcXyceFjbgUNlwPc5E7F+cNxxIHAHDBGlrmX2+9CoPMdpzm2QfrMtZQXbf9WnmQ2Y7VPOtGq57gIhGfqSqPlA0y23GaZy+A4GJ7jsFZ9Q27VS9Bt/IkDnjOdgZfOnPB/5nI6nS/OGafhxBsCq6SbgnNwSaEyFm64Qaj0xxsQnYYkCNnwdVSKsHYdSjTJgSYCAOawMWFRlLJVLcTe5kQYpq8sGbCgsTtTFLJRDcwO+OxZUIAh5gmHyeKYYDiqunFVyLT3vTTDV3QCd2hEmO1MTuEbbPtyNPQnHpoWXTTWZbW/1LSo6k+UXFZXzFCAI4ALXvcWJxtkh0BjMBa3UbNCEGgqQJeIITIGAK0vJ7Sd1bCmQfBY4+IeM2UAyEkxDB5/3UtVaSYDDB5xVeB23XK4YVOTRXWByn0Bn/00N1IQ4G2gcFvZPQAeE45LWCT4vl6JEv9MJNh/ZSzfuT/CDlym2jba81U6w6cctUVmubjpWpiTfN5WQ2xZvkAsJoY8mn4RPMvFiOemQgcxeIAAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div style="font-size: 1.2rem; line-height: 2rem">我的订单</div>
      <div style="padding-top: 0.5rem">
        <svg
          t="1739108529816"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5005"
          width="16"
          height="16"
        >
          <path
            d="M60.452771 925.077283c5.395785-20.683841 18.685402-38.070258 37.370804-48.861826l631.406714-364.115535L96.924278 147.484778l-0.199844-0.099922c-18.08587-11.191257-30.775956-28.577674-35.672131-48.961749-4.996097-20.483997-1.598751-41.667447 9.592506-59.653396C92.527713 2.697892 138.991413-9.692428 176.262295 10.491803h0.099922l749.91413 432.462139c25.180328 14.688525 40.068696 40.468384 39.76893 68.946136 0.299766 28.477752-14.588603 54.257611-39.868852 68.946136L176.562061 1013.208431c-11.89071 7.094457-25.480094 10.791569-39.169399 10.791569-6.594848 0-13.189696-0.899297-19.684621-2.498048-20.683841-5.395785-38.070258-18.58548-48.961749-37.270883-10.691647-17.886027-13.589383-38.969555-8.293521-59.153786z"
            p-id="5006"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div style="background: white; margin-top: 1rem; padding: 1rem">
    <div
      style="
        padding: 0 1rem;
        display: grid;
        grid-template-columns: 2fr 11fr 1fr;
      "
    >
      <div>
        <img
          style="height: 2rem"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABLBJREFUaAXdWtuLTVEY/9Y6e5jcb0kidYwGZ+TNJSlTaJSkRKkx/AVeKPLkSRQvHjy7TBSFRCapUZLLE5mLYUyJNE0uw6DBOWf5fvvM2s7Zs/c+a/bejn3me9l73b7v99vr/n1bUIyyr+vOkpz61aiUWEmk6oWiNAmapoimwowgGiJFX5WgPk71CKGepcSE9rPLN7+KCwbbiCbNHW0rhcruISF2KaUWhtEmhHhLSl1WwrrQ2tD0LIwO3SY0oZbOtlV5lT3BX3yDVhbLU9A9KaxD5zNNT8LoGzOh5s62Ou6RY0rRzjAGTdsIQVe4x460Zpp6TdugnjGho6rdet3x/Tg32a9I1YzFSNi6gsRvnounFzdMPnxUNGZN9BgRaum+O1vlfl7hOdJoojTuOjzH2kVq4s7zyzZ+LKe7LKG9nW2ZXD57gxWlyyn7x+V9KWltO5dp6gyyI4MKm7tubeKJ/5Dr/G8ygJkGFmAKwuzbQ+gZKODJb+8hQUoqWcaLxRCvgmv9esqTEOZMPjuMZTMJPeP1vfqkVbvKa06NGnJYzbAAJJgMCKaBEVjdbEcRwtL8v1YzN7igNDAWtpHSWiVDzt4087muSu0zpVDGnsI+pWRqefHmW9Jl9gmAKHDTnGnV0u55S2nZ5Nk0o6Z27CgMWgz+Hqbu7x/pUv8L+pwd9m2BDw/MXGGXruT0kH02y2cf6wKvJ8gcq1tPU6wJXsWx533L/qIjvfcDScGolNZqffZz5pB90CwDCT1TKTKAAluwWU6KsduEcAUwOTVjmFVajGzyid/mwOBsQvZ9xgDpv5ozQaZNbWoOhSHHl7MgpVVRNsJB4toc9qaZJKLgAC4SPoAkAYuCBVysEYdGFD1099MbejD4jnJ8kg0jKT5xrpuxgDbOWhSmudMGXHgOqXonJ+TLoy/vQ5OBSXwI6Iguql7arqaImtZMn0/4ymEFbaEjqoCLBb8Z70GRBEMl6nCJBEA3Zi5SOwF1XjU/waWwD1UzCxd2ySN/yJVXtUlwseBrZgaRDmmmy3Zcy7PvF2cusuA4961iVGC6bMe3PHvDAheeQ6LHu9g813TZjmt59kcmeiyENEJu8I7epCzb4CIRn3GQVfkLuEgEm+z4jAEZ3PUrLaY2wQFcCvsQB5tMgMJxUWkxtjnCwSaEyJkJUHhh4LiolMAWbJqI5uCcKJs7brab+BWS5MZyiHLUr7VhayPSjl8OYUD2ngS6sdAAfrIz757i1VcmyRraPreOtsxJe9a5/aGPrg/00o88x7NiEGDXagpziFPwa/EpHj7tyAKgF/u76erAy1G6kIeyuMgAs/bJwZhDCAnENAthQKSiy7WBVyWkQAZ5cYntCmbMxfqcOaQz9zy/eZKP4Qd0Oo7n2pHL28NYbqV/ETH4UxdWbD34N8fVQyhAgBYxzeJKUd9BJHYyjBFY3dhG9RAqjKuAFwghMoYALU+4xN2VgAnYvKJ3wF6yKCBDC2KYSoodSSIFLMDkF18Fds8hp0nhWW1h/bKEQKqafrzwHXIgogXjdXFm0mYsk3HuU1q/3xO2YBO2/eaMu61RDxU3Gjc/LxWTwvu4+b3MTWzc/ADoJoZ0En7R/AN2kCJkyH1K+gAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div style="font-size: 1.2rem; line-height: 2rem">帮助反馈</div>
      <div style="padding-top: 0.5rem">
        <svg
          t="1739108529816"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5005"
          width="16"
          height="16"
        >
          <path
            d="M60.452771 925.077283c5.395785-20.683841 18.685402-38.070258 37.370804-48.861826l631.406714-364.115535L96.924278 147.484778l-0.199844-0.099922c-18.08587-11.191257-30.775956-28.577674-35.672131-48.961749-4.996097-20.483997-1.598751-41.667447 9.592506-59.653396C92.527713 2.697892 138.991413-9.692428 176.262295 10.491803h0.099922l749.91413 432.462139c25.180328 14.688525 40.068696 40.468384 39.76893 68.946136 0.299766 28.477752-14.588603 54.257611-39.868852 68.946136L176.562061 1013.208431c-11.89071 7.094457-25.480094 10.791569-39.169399 10.791569-6.594848 0-13.189696-0.899297-19.684621-2.498048-20.683841-5.395785-38.070258-18.58548-48.961749-37.270883-10.691647-17.886027-13.589383-38.969555-8.293521-59.153786z"
            p-id="5006"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
